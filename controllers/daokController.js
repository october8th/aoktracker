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
    }
};