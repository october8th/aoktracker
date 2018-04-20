const db = require("../models");

module.exports = {
    find: function(req, res) {
        db.Daok
            .findOne({title:"counter"})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.Daok
      .findOneAndUpdate({},{$inc:{howMany: 1}},{upsert:true})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log(req.body.myuserid);
      var update = {
        $addToSet: { completed: {userid: req.body.myuserid } }
      }
      var conditions = {
        title:"counter",
        'completed.userid': { $ne: req.body.myuserid }
      };
      db.Daok.findOneAndUpdate(conditions, update).then(dbModel => console.log(dbModel));
    },
    check: function(req,res) {
      db.Daok.findOne({'completed.userid' : req.body.myuserid})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    }
};