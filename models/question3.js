var mongodb = require('./db');

function Questionthree(questionthree) {
  this.name = questionthree.name;
  this.tizhi = questionthree.tizhi;
}

module.exports = Questionthree;

//存储questionthree
Questionthree.prototype.save = function(callback) {
  //要存入数据库的文档
  var questionthree = {
      name: this.name,
      tizhi: this.tizhi
  };
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionthree 集合
    db.collection('questionthree', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //将文档插入 questionthree 集合
      collection.insert(questionthree, {
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

//读取用户问卷三信息
Questionthree.get = function(name, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);//错误，返回 err 信息
    }
    //读取 questionthree 集合
    db.collection('questionthree', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);//错误，返回 err 信息
      }
      //查找用户名（name键）值为 name 一个文档
      collection.findOne({
        name: name
      }, function (err, questionthree) {
        mongodb.close();
        if (err) {
          return callback(err);//失败！返回 err
        }
        callback(null, questionthree);//成功！返回查询的用户信息
      });
    });
  });
};

Questionthree.update = function(name,questionthree, callback) {
  //打开数据库
  mongodb.open(function (err, db) {
    if (err) {
      return callback(err);
    }
    //读取 questionone 集合
    db.collection('questionthree', function (err, collection) {
      if (err) {
        mongodb.close();
        return callback(err);
      }
      //更新内容
      collection.update({
        "name": name
      }, {
        $set: {name: questionthree.name,
      tizhi: questionthree.tizhi}
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