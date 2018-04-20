const db = require("../models");

module.exports = {
    //find aok and populate with associated notes
    findOne: function(req, res) {
        db.Aok
            .findOne({ _id: req.params.id })
            .populate("note")
            .then(dbAok => res.json(dbAok))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Note
            .create(req.body)
            .then(dbNote => {
                return 
                    db.Aok
                        .findOneAndUpdate({ _id: req.params.id}, { "$push": { "note": dbNote._id }}, { new: true });
            })
            .then(dbAok => res.json(dbAok))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Note
            .findOneAndRemove({ _id: req.params.id })
            .then(dbNote => {
                return
                    db.Aok
                        .findOneAndUpdate({ note: dbNote._id }, { "$pull": { "note": dbNote._id }}, { new: true });
            })
            .then(dbAok => res.json(dbAok))
            .catch(err => res.status(422).json(err));
    }
}