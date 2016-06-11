var mongodb = require('./db');

function Questionfour(questionfour) {
  this.name = questionfour.name;
  this.Ascore = questionfour.Ascore;
  this.Bscore = questionfour.Bscore;
  this.Cscore = questionfour.Cscore;
  this.Dscore = questionfour.Dscore;
  this.Escore = questionfour.Escore;
  this.Fscore = questionfour.Fscore;
  this.Gscore = questionfour.Gscore;
  this.Hscore = questionfour.Hscore;
  this.Iscore = questionfour.Iscore,
  this.result = questionfour.result;
}

module.exports = Questionfour;

//存储Questionfour
Questionfour.prototype.save = function(callback) {
  //要存入数据库的文档
  var questionfour = {
      name: this.name,
      Ascore : this.Ascore,
      Bscore : this.Bscore,
      Cscore : this.Cscore,
      Dscore : this.Dscore,
      Escore : this.Escore,
      Fscore : this.Fscore,
      Gscore : this.Gscore,
      Hscore : this.Hscore,
      Iscore : this.Iscore,
      result : this.result
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionfour 集合
    db.collection('questionfour', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 Questionfour 集合
      collection.insert(questionfour, {
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

//读取用户问卷四信息
Questionfour.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 Questionfour 集合
    db.collection('questionfour', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, questionfour) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, questionfour);//成功！返回查询的用户信息
      });
    });
  });
};

Questionfour.update = function(name,questionfour, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questionfour', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: questionfour.name,
      Ascore : questionfour.Ascore,
  Bscore : questionfour.Bscore,
  Cscore : questionfour.Cscore,
  Dscore : questionfour.Dscore,
  Escore : questionfour.Escore,
  Fscore : questionfour.Fscore,
  Gscore : questionfour.Gscore,
  Hscore : questionfour.Hscore,
  Iscore : questionfour.Iscore,
        result: questionfour.result}
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