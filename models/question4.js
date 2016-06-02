var mongodb = require('./db');

function Questionfour(questionfour) {
  this.name = questionfour.name;
  this.Ascore1 = questionfour.Ascore1;
  this.Ascore2 = questionfour.Ascore2;
  this.Ascore3 = questionfour.Ascore3;
  this.Ascore4 = questionfour.Ascore4;
  this.Ascore5 = questionfour.Ascore5;
  this.Ascore6 = questionfour.Ascore6;
  this.Ascore7 = questionfour.Ascore7;
  this.Ascore8 = questionfour.Ascore8;
  this.Bscore1 = questionfour.Bscore1;
  this.Bscore2 = questionfour.Bscore2;
  this.Bscore3 = questionfour.Bscore3;
  this.Bscore4 = questionfour.Bscore4;
  this.Bscore5 = questionfour.Bscore5;
  this.Bscore6 = questionfour.Bscore6;
  this.Bscore7 = questionfour.Bscore7;
  this.Bscore8 = questionfour.Bscore8;
  this.Cscore1 = questionfour.Cscore1;
  this.Cscore2 = questionfour.Cscore2;
  this.Cscore3 = questionfour.Cscore3;
  this.Cscore4 = questionfour.Cscore4;
  this.Cscore5 = questionfour.Cscore5;
  this.Cscore6 = questionfour.Cscore6;
  this.Cscore7 = questionfour.Cscore7;
  this.Dscore1 = questionfour.Dscore1;
  this.Dscore2 = questionfour.Dscore2;
  this.Dscore3 = questionfour.Dscore3;
  this.Dscore4 = questionfour.Dscore4;
  this.Dscore5 = questionfour.Dscore5;
  this.Dscore6 = questionfour.Dscore6;
  this.Dscore7 = questionfour.Dscore7;
  this.Dscore8 = questionfour.Dscore8;
  this.Escore1 = questionfour.Escore1;
  this.Escore2 = questionfour.Escore2;
  this.Escore3 = questionfour.Escore3;
  this.Escore4 = questionfour.Escore4;
  this.Escore5 = questionfour.Escore5;
  this.Escore6 = questionfour.Escore6;
  this.Escore7 = questionfour.Escore7;
  this.Escore8 = questionfour.Escore8;
  this.Fscore1 = questionfour.Fscore1;
  this.Fscore2 = questionfour.Fscore2;
  this.Fscore3 = questionfour.Fscore3;
  this.Fscore4 = questionfour.Fscore4;
  this.Fscore5 = questionfour.Fscore5;
  this.Fscore6 = questionfour.Fscore6;
  this.Gscore1 = questionfour.Gscore1;
  this.Gscore2 = questionfour.Gscore2;
  this.Gscore3 = questionfour.Gscore3;
  this.Gscore4 = questionfour.Gscore4;
  this.Gscore5 = questionfour.Gscore5;
  this.Gscore6 = questionfour.Gscore6;
  this.Gscore7 = questionfour.Gscore7;
  this.Gscore8 = questionfour.Gscore8;
  this.Hscore1 = questionfour.Hscore1;
  this.Hscore2 = questionfour.Hscore2;
  this.Hscore3 = questionfour.Hscore3;
  this.Hscore4 = questionfour.Hscore4;
  this.Hscore5 = questionfour.Hscore5;
  this.Hscore6 = questionfour.Hscore6;
  this.Hscore7 = questionfour.Hscore7;
  this.Iscore1 = questionfour.Iscore1;
  this.Iscore2 = questionfour.Iscore2;
  this.Iscore3 = questionfour.Iscore3;
  this.Iscore4 = questionfour.Iscore4;
  this.Iscore5 = questionfour.Iscore5;
  this.Iscore6 = questionfour.Iscore6;
  this.Iscore7 = questionfour.Iscore7;
}

module.exports = Questionfour;

//存储Questionfour
Questionfour.prototype.save = function(callback) {
  //要存入数据库的文档
  var questionfour = {
      name: this.name,
      Ascore1 : this.Ascore1,
      Ascore2 : this.Ascore2,
      Ascore3 : this.Ascore3,
      Ascore4 : this.Ascore4,
      Ascore5 : this.Ascore5,
      Ascore6 : this.Ascore6,
      Ascore7 : this.Ascore7,
      Ascore8 : this.Ascore8,
      Bscore1 : this.Bscore1,
      Bscore2 : this.Bscore2,
      Bscore3 : this.Bscore3,
      Bscore4 : this.Bscore4,
      Bscore5 : this.Bscore5,
      Bscore6 : this.Bscore6,
      Bscore7 : this.Bscore7,
      Bscore8 : this.Bscore8,
      Cscore1 : this.Cscore1,
      Cscore2 : this.Cscore2,
      Cscore3 : this.Cscore3,
      Cscore4 : this.Cscore4,
      Cscore5 : this.Cscore5,
      Cscore6 : this.Cscore6,
      Cscore7 : this.Cscore7,
      Dscore1 : this.Dscore1,
      Dscore2 : this.Dscore2,
      Dscore3 : this.Dscore3,
      Dscore4 : this.Dscore4,
      Dscore5 : this.Dscore5,
      Dscore6 : this.Dscore6,
      Dscore7 : this.Dscore7,
      Dscore8 : this.Dscore8,
      Escore1 : this.Escore1,
      Escore2 : this.Escore2,
      Escore3 : this.Escore3,
      Escore4 : this.Escore4,
      Escore5 : this.Escore5,
      Escore6 : this.Escore6,
      Escore7 : this.Escore7,
      Escore8 : this.Escore8,
      Fscore1 : this.Fscore1,
      Fscore2 : this.Fscore2,
      Fscore3 : this.Fscore3,
      Fscore4 : this.Fscore4,
      Fscore5 : this.Fscore5,
      Fscore6 : this.Fscore6,
      Gscore1 : this.Gscore1,
      Gscore2 : this.Gscore2,
      Gscore3 : this.Gscore3,
      Gscore4 : this.Gscore4,
      Gscore5 : this.Gscore5,
      Gscore6 : this.Gscore6,
      Gscore7 : this.Gscore7,
      Gscore8 : this.Gscore8,
      Hscore1 : this.Hscore1,
      Hscore2 : this.Hscore2,
      Hscore3 : this.Hscore3,
      Hscore4 : this.Hscore4,
      Hscore5 : this.Hscore5,
      Hscore6 : this.Hscore6,
      Hscore7 : this.Hscore7,
      Iscore1 : this.Iscore1,
      Iscore2 : this.Iscore2,
      Iscore3 : this.Iscore3,
      Iscore4 : this.Iscore4,
      Iscore5 : this.Iscore5,
      Iscore6 : this.Iscore6,
      Iscore7 : this.Iscore7
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

//读取用户问卷三信息
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
      Ascore1 : questionfour.Ascore1,
  Ascore2 : questionfour.Ascore2,
  Ascore3 : questionfour.Ascore3,
  Ascore4 : questionfour.Ascore4,
  Ascore5 : questionfour.Ascore5,
  Ascore6 : questionfour.Ascore6,
  Ascore7 : questionfour.Ascore7,
  Ascore8 : questionfour.Ascore8,
  Bscore1 : questionfour.Bscore1,
  Bscore2 : questionfour.Bscore2,
  Bscore3 : questionfour.Bscore3,
  Bscore4 : questionfour.Bscore4,
  Bscore5 : questionfour.Bscore5,
  Bscore6 : questionfour.Bscore6,
  Bscore7 : questionfour.Bscore7,
  Bscore8 : questionfour.Bscore8,
  Cscore1 : questionfour.Cscore1,
  Cscore2 : questionfour.Cscore2,
  Cscore3 : questionfour.Cscore3,
  Cscore4 : questionfour.Cscore4,
  Cscore5 : questionfour.Cscore5,
  Cscore6 : questionfour.Cscore6,
  Cscore7 : questionfour.Cscore7,
  Dscore1 : questionfour.Dscore1,
  Dscore2 : questionfour.Dscore2,
  Dscore3 : questionfour.Dscore3,
  Dscore4 : questionfour.Dscore4,
  Dscore5 : questionfour.Dscore5,
  Dscore6 : questionfour.Dscore6,
  Dscore7 : questionfour.Dscore7,
  Dscore8 : questionfour.Dscore8,
  Escore1 : questionfour.Escore1,
  Escore2 : questionfour.Escore2,
  Escore3 : questionfour.Escore3,
  Escore4 : questionfour.Escore4,
  Escore5 : questionfour.Escore5,
  Escore6 : questionfour.Escore6,
  Escore7 : questionfour.Escore7,
  Escore8 : questionfour.Escore8,
  Fscore1 : questionfour.Fscore1,
  Fscore2 : questionfour.Fscore2,
  Fscore3 : questionfour.Fscore3,
  Fscore4 : questionfour.Fscore4,
  Fscore5 : questionfour.Fscore5,
  Fscore6 : questionfour.Fscore6,
  Gscore1 : questionfour.Gscore1,
  Gscore2 : questionfour.Gscore2,
  Gscore3 : questionfour.Gscore3,
  Gscore4 : questionfour.Gscore4,
  Gscore5 : questionfour.Gscore5,
  Gscore6 : questionfour.Gscore6,
  Gscore7 : questionfour.Gscore7,
  Gscore8 : questionfour.Gscore8,
  Hscore1 : questionfour.Hscore1,
  Hscore2 : questionfour.Hscore2,
  Hscore3 : questionfour.Hscore3,
  Hscore4 : questionfour.Hscore4,
  Hscore5 : questionfour.Hscore5,
  Hscore6 : questionfour.Hscore6,
  Hscore7 : questionfour.Hscore7,
  Iscore1 : questionfour.Iscore1,
  Iscore2 : questionfour.Iscore2,
  Iscore3 : questionfour.Iscore3,
  Iscore4 : questionfour.Iscore4,
  Iscore5 : questionfour.Iscore5,
  Iscore6 : questionfour.Iscore6,
  Iscore7 : questionfour.Iscore7}
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