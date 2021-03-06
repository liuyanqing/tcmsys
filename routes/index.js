var crypto = require('crypto'),
    fs = require('fs'),
    User = require('../models/user.js'),
    Questionone = require('../models/question1.js'),
    Questiontwo = require('../models/question2.js'),
    Questionthree = require('../models/question3.js'),
    Questionfour = require('../models/question4.js'),
    PulseController = require('../models/Pulse_Sample.js'),
    pulseController = new PulseController(),
    start_flag = 0;

 module.exports = function(app) {
  app.get('/', checkLogin);
  app.get('/', function (req, res) {
      res.render('index', {
        title: '首页|中医体质辨识系统',
        user: req.session.user,
        success: req.flash('success').toString(),
        error: req.flash('error').toString()
      });
  });
 
  app.get('/reg', checkNotLogin);
  app.get('/reg', function (req, res) {
    res.render('reg', {
      title: '注册|中医体质辨识系统',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  app.post('/reg', checkNotLogin);
  app.post('/reg', function (req, res) {
    var name = req.body.name,
        password = req.body.password,
        password_re = req.body['password-repeat'];
    //检验用户两次输入的密码是否一致
    if (password_re != password) {
      req.flash('error', '两次输入的密码不一致!'); 
      return res.redirect('/reg');//返回主册页
    }
    //生成密码的 md5 值
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    var newUser = new User({
        name: req.body.name,
        password: password,
        email: req.body.email
    });
    //检查用户名是否已经存在 
    User.get(newUser.name, function (err, user) {
      if (user) {
        req.flash('error', '用户已存在!');
        return res.redirect('/reg');//返回注册页
      }
      //如果不存在则新增用户
      newUser.save(function (err, user) {
        if (err) {
          req.flash('error', err);
          return res.redirect('/reg');//注册失败返回主册页
        }
        req.session.user = user;//用户信息存入 session
        req.flash('success', '注册成功!');
        res.redirect('/');//注册成功后返回主页
      });
    });
  });

  app.get('/login', checkNotLogin);
  app.get('/login', function (req, res) {
    res.render('login', {
      title: '登录|中医体质辨识系统',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    }); 
  });

  app.post('/login', checkNotLogin);
  app.post('/login', function (req, res) {
    //生成密码的 md5 值
    var md5 = crypto.createHash('md5'),
        password = md5.update(req.body.password).digest('hex');
    //检查用户是否存在
    User.get(req.body.name, function (err, user) {
      if (!user) {
        req.flash('error', '用户不存在!'); 
        return res.redirect('/login');//用户不存在则跳转到登录页
      }
      //检查密码是否一致
      if (user.password != password) {
        req.flash('error', '密码错误!'); 
        return res.redirect('/login');//密码错误则跳转到登录页
      }
      //用户名密码都匹配后，将用户信息存入 session
      req.session.user = user;
      req.flash('success', '登陆成功!');
      res.redirect('/');//登陆成功后跳转到主页
    });
  });

  app.get('/logout', checkLogin);
  app.get('/logout', function (req, res) {
    req.session.user = null;
    req.flash('success', '登出成功!');
    res.redirect('/login');//登出成功后跳转到主页
  });

  app.get('/upload', checkLogin);
  app.get('/upload', function (req, res) {
    res.render('upload', {
      title: '文件上传|中医体质辨识系统',
      user: req.session.user,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  app.post('/upload', checkLogin);
  app.post('/upload', function (req, res) {
    req.flash('success', '文件上传成功!');
    res.redirect('/upload');
  });

  app.get('/question1', checkLogin);
  app.get('/question1', function (req, res) {
    Questionone.get(req.session.user.name, function (err, questionone){
    res.render('question1', {
      title: '测试|中医体质辨识系统',
      user: req.session.user,
      questionone: questionone,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  });

  app.post('/question1', checkLogin);
  app.post('/question1', function (req, res) {
   Questionone.get(req.body.name, function (err, questionone){
    if(!questionone){
      var questionone = new Questionone({
        name: req.body.name,
        sex: req.body.sex,
        age:req.body.age,
        matrimony: req.body.matrimony,
        nation: req.body.nation,
        province: req.body.province,
        city: req.body.city,
        tel: req.body.tel,
        idcard: req.body.idcard,
        security: req.body.security,
        insurance: req.body.insurance,
        email:req.body.email,
        address: req.body.address,
        job: req.body.job,
        education: req.body.education,
        vision1: req.body.vision1,
        vision2: req.body.vision2,
        height: req.body.height,
        weight1: req.body.weight1,
        weight2: req.body.weight2,
        lowbloodpre: req.body.lowbloodpre,
        highbloodpre: req.body.highbloodpre,
        bloodfat: req.body.bloodfat,
        bloodsugar: req.body.bloodsugar
        });
      questionone.save(function (err) {
      if (err) {
        req.flash('error', err); 
        return res.redirect('/');
      }
      req.flash('success', '完成测试');
      res.redirect('/question2');//完成测试以后进入下一个测试
      });
    }else{
      var questionone = new Questionone({
        name: req.body.name,
        sex: req.body.sex,
        age:req.body.age,
        matrimony: req.body.matrimony,
        nation: req.body.nation,
        province: req.body.province,
        city: req.body.city,
        tel: req.body.tel,
        idcard: req.body.idcard,
        security: req.body.security,
        insurance: req.body.insurance,
        email:req.body.email,
        address: req.body.address,
        job: req.body.job,
        education: req.body.education,
        vision1: req.body.vision1,
        vision2: req.body.vision2,
        height: req.body.height,
        weight1: req.body.weight1,
        weight2: req.body.weight2,
        lowbloodpre: req.body.lowbloodpre,
        highbloodpre: req.body.highbloodpre,
        bloodfat: req.body.bloodfat,
        bloodsugar: req.body.bloodsugar
        });
    Questionone.update(req.body.name,questionone,function(err){
      if (err) {
        req.flash('error', err); 
        return res.redirect('/question1');
      }
      req.flash('success', '完成修改');
      res.redirect('/question2');//完成测试以后进入下一个测试
    });
    }
    });
  });

  app.get('/question2', checkLogin);
  app.get('/question2', function (req, res) {
    Questiontwo.get(req.session.user.name, function (err, questiontwo){
    res.render('question2', {
      title: '测试|中医体质辨识系统',
      user: req.session.user,
      questiontwo: questiontwo,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  });
  app.post('/question2', checkLogin);
  app.post('/question2', function (req, res) {
    Questiontwo.get(req.body.name, function (err, questiontwo){
    if(!questiontwo){
      var questiontwo = new Questiontwo({
        name: req.body.name,
        shezhi: req.body.shezhi,
        shetai: req.body.shetai,
        maixiang: req.body.maixiang,
        xingge: req.body.xingge,
        yinshi: req.body.yinshi,
        yanjiu: req.body.yanjiu,
        shuimian: req.body.shuimian,
        yundong: req.body.yundong,
        wenhua: req.body.wenhua,
        guomin: req.body.guomin,
        jiazu: req.body.jiazu,
        jibing: req.body.jibing
        });
      questiontwo.save(function (err) {
      if (err) {
        req.flash('error', err); 
        return;
      }
    req.flash('success', '完成测试');
    res.redirect('/question3');//完成测试以后进入下一个测试
    });
      }else{
        var questiontwo = new Questiontwo({
        name: req.body.name,
        shezhi: req.body.shezhi,
        shetai: req.body.shetai,
        maixiang: req.body.maixiang,
        xingge: req.body.xingge,
        yinshi: req.body.yinshi,
        yanjiu: req.body.yanjiu,
        shuimian: req.body.shuimian,
        yundong: req.body.yundong,
        wenhua: req.body.wenhua,
        guomin: req.body.guomin,
        jiazu: req.body.jiazu,
        jibing: req.body.jibing
        });
    Questiontwo.update(req.body.name,questiontwo,function(err){
      if (err) {
        req.flash('error', err); 
        return res.redirect('/question2');
      }
      req.flash('success', '完成修改');
      res.redirect('/question3');//完成测试以后进入下一个测试
    });
    }
    });
  });

  app.get('/question3', checkLogin);
  app.get('/question3', function (req, res) {
    Questionthree.get(req.session.user.name, function (err, questionthree){
    res.render('question3', {
      title: '测试|中医体质辨识系统',
      user: req.session.user,
      questionthree: questionthree,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
  });
  });
  app.post('/question3', checkLogin);
  app.post('/question3', function (req, res) {
    Questionthree.get(req.body.name, function (err, questionthree){
    if(!questionthree){
      var questionthree = new Questionthree({
        name: req.body.name,
        tizhi: req.body.tizhi
        });
      questionthree.save(function (err) {
      if (err) {
        req.flash('error', err); 
        return false;
      }
    req.flash('success', '选择完成');
    res.redirect('/question4');//完成测试以后进入下一个测试
    });
  }else{
    var questionthree = new Questionthree({
        name: req.body.name,
        tizhi: req.body.tizhi
        });

      Questionthree.update(req.body.name,questionthree,function(err){
      if (err) {
        req.flash('error', err); 
        return res.redirect('/question3');
      }
      req.flash('success', '选择完成');
      res.redirect('/question4');
    })
  }
  })
  });

  app.get('/question4', checkLogin);
  app.get('/question4', function (req, res) {
    Questionthree.get(req.session.user.name, function (err, questionthree){
      if(!questionthree){
        req.flash('err', '没有选择体质');
        res.redirect('/question3');
      }
    res.render('question4', {
      title: '测试|中医体质辨识系统',
      user: req.session.user,
      questionthree: questionthree,
      success: req.flash('success').toString(),
      error: req.flash('error').toString()
    });
    })
  });
  app.post('/question4', checkLogin);
  app.post('/question4', function (req, res) {
    Questionfour.get(req.body.name, function (err, questionfour){
        if(!questionfour){
          var questionfour = new Questionfour({
            name: req.body.name,
            Ascore : req.body.Ascore,
            Bscore : req.body.Bscore,
            Cscore : req.body.Cscore,
            Dscore : req.body.Dscore,
            Escore : req.body.Escore,
            Fscore : req.body.Fscore,
            Gscore : req.body.Gscore,
            Hscore : req.body.Hscore,
            Iscore : req.body.Iscore,
            result : req.body.result
            });
          questionfour.save(function (err) {
          if (err) {
            req.flash('error', err); 
            return false;
          }
          req.flash('success', '测试完成');
          res.redirect('/result');//完成测试以后进入体质测试结果
          });
      }else{
        var questionfour = new Questionfour({
            name: req.body.name,
            Ascore : req.body.Ascore,
            Bscore : req.body.Bscore,
            Cscore : req.body.Cscore,
            Dscore : req.body.Dscore,
            Escore : req.body.Escore,
            Fscore : req.body.Fscore,
            Gscore : req.body.Gscore,
            Hscore : req.body.Hscore,
            Iscore : req.body.Iscore,
            result : req.body.result
            });
          Questionfour.update(req.body.name,questionfour,function(err){
          if (err) {
            req.flash('error', err); 
            return res.redirect('/question4');
          }
          req.flash('success', '测试完成');
          res.redirect('/result');
        })
      }
    })
  });

  app.get('/result', checkLogin);
  app.get('/result', function (req, res) {
    Questionfour.get(req.session.user.name, function (err, questionfour) {
      if(!questionfour){
        req.flash('err', '没有进行体质测试');
        res.redirect('/question4');
      }
      Questionone.get(req.session.user.name, function (err, questionone) {
        if(!questionone){
          req.flash('err', '没有填写个人信息');
          res.redirect('/question1');
        }
        res.render('result', {
          title: '测评结果|中医体质辨识系统',
          user: req.session.user,
          questionone: questionone,
          questionfour: questionfour,
          success: req.flash('success').toString(),
          error: req.flash('error').toString()
        });
      });
    });
  });

    app.get('/pulsecollect', checkLogin);
    app.get('/pulsecollect', function (req, res) {
        res.render('pulsecollect', {
            title: '脉搏信号采集|中医体质辨识系统',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });

     app.get('/pulsecollect/start', function (req, res) {
         pulseController.cmd("open");
         pulseController.cmd("start");
         start_flag = 1;
         var T = 10;
         setInterval(function(){
             if(start_flag){
                 console.log("%d",pulseController.getData());
             }
         }, T);
         req.flash('success', '开始采样');
         res.render('pulsecollect-start', {
             title: '脉搏信号采集|中医体质辨识系统',
             user: req.session.user,
             success: req.flash('success').toString(),
             error: req.flash('error').toString()
         });
     });

     app.get('/pulsecollect/stop', function (req, res) {
         start_flag = 0;
         pulseController.cmd("stop");
         pulseController.cmd("close");
         req.flash('success', '停止采样');
         res.redirect('/pulsecollect');
     });

    app.get('/imagecollect', checkLogin);
    app.get('/imagecollect', function (req, res) {
        res.render('imagecollect', {
            title: '图像信息采集|中医体质辨识系统',
            user: req.session.user,
            success: req.flash('success').toString(),
            error: req.flash('error').toString()
        });
    });


  app.get('/useradmin', checkLogin);
  app.get('/useradmin', checkAdmin);
  app.get('/useradmin', function (req, res) {
      Questionfour.get(req.session.user.name, function (err, questionfour) {
          if(!questionfour){
              req.flash('err', '没有进行体质测试');
              res.redirect('/question4');
          }
          Questionone.getAll(function (err, questionone) {
              if(!questionone){
                  req.flash('err', err);
                  res.redirect('/');
              }
              res.render('useradmin', {
                  title: '用户管理|中医体质辨识系统',
                  user: req.session.user,
                  questionone: questionone,
                  questionfour: questionfour,
                  success: req.flash('success').toString(),
                  error: req.flash('error').toString()
              });
          });
      });
  });

  app.get('/help', function (req, res) {
  res.render('help', {
    title: '帮助|中医体质辨识系统',
    user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
  });

  function checkLogin(req, res, next) {
    if (!req.session.user) {
      req.flash('error', '未登录!'); 
      return res.redirect('/login');
    }
    next();
  }

  function checkNotLogin(req, res, next) {
    if (req.session.user) {
      req.flash('error', '已登录!'); 
      return res.redirect('back');//返回之前的页面
    }
    next();
  }
     function checkAdmin(req, res, next) {
         if (req.session.user.name != "admin") {
             req.flash('error', '不是系统管理员!');
             return res.redirect('/login');
         }
         next();
     }
};
