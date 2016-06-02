var mongodb = require('./db'),
    Questionfour = require('../models/question4.js');

function Score(score) {
  this.name = score.name;
  this.Ascore = score.Ascore;
  this.Bscore = score.Bscore;
  this.Cscore = score.Cscore;
  this.Dscore = score.Dscore;
  this.Escore = score.Escore;
  this.Fscore = score.Fscore;
  this.Gscore = score.Gscore;
  this.Hscore = score.Hscore;
  this.Iscore = score.Iscore;
}

module.exports = Score;

//存储score
Score.prototype.save = function(callback) {
  //要存入数据库的文档
  var score = {
      name: this.name,
      tizhi: this.tizhi
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 score 集合
    db.collection('score', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 score 集合
      collection.insert(score, {
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

//读取用户测试结果信息
Score.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 score 集合
    db.collection('score', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, score) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, score);//成功！返回查询的用户信息
      });
    });
  });
};

Score.update = function(name,score, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('score', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: score.name,
      tizhi: score.tizhi}
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