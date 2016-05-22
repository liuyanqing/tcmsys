var mongodb = require('./db');

function Questiontwo(questiontwo) {
  this.name = questiontwo.name;
  this.shezhi = questiontwo.shezhi;
  this.shetai = questiontwo.shetai;
  this.maixiang = questiontwo.maixiang;
  this.xingge = questiontwo.xingge;
  this.yinshi = questiontwo.yinshi;
  this.yanjiu = questiontwo.yanjiu;
  this.shuimian = questiontwo.shuimian;
  this.yundong = questiontwo.yundong;
  this.wenhua = questiontwo.wenhua;
  this.guomin = questiontwo.guomin;
  this.jiazu = questiontwo.jiazu;
  this.jibing = questiontwo.jibing;
}

module.exports = Questiontwo;

//存储questiontwo
Questiontwo.prototype.save = function(callback) {
  //要存入数据库的文档
  var questiontwo = {
      name: this.name,
      shezhi: this.shezhi,
      shetai: this.shetai,
      maixiang: this.maixiang,
      xingge: this.xingge,
      yinshi: this.yinshi,
      yanjiu: this.yanjiu,
      shuimian: this.shuimian,
      yundong: this.yundong,
      wenhua: this.wenhua,
      guomin: this.guomin,
      jiazu: this.jiazu,
      jibing: this.jibing
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questiontwo 集合
    db.collection('questiontwo', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 questiontwo 集合
      collection.insert(questiontwo, {
        safe: true
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null);//返回 err 为 null
      });
    });
  });
};

//读取用户问卷一信息
Questiontwo.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 questiontwo 集合
    db.collection('questiontwo', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, questiontwo) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        console.log(questiontwo);
        callback(null, questiontwo);//成功！返回查询的用户信息
      });
    });
  });
};

Questiontwo.update = function(name,questiontwo, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questiontwo', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: questiontwo.name,
      shezhi: questiontwo.shezhi,
      shetai: questiontwo.shetai,
      maixiang: questiontwo.maixiang,
      xingge: questiontwo.xingge,
      yinshi: questiontwo.yinshi,
      yanjiu: questiontwo.yanjiu,
      shuimian: questiontwo.shuimian,
      yundong: questiontwo.yundong,
      wenhua: questiontwo.wenhua,
      guomin: questiontwo.guomin,
      jiazu: questiontwo.jiazu,
      jibing: questiontwo.jibing}
      }, function (err) {
        mongodb.close();
        if (err) {
          return callback(err);
        }
        
        callback(null);
      });
    });
  });
};