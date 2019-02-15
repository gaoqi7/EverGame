const db = require('../models');

module.exports = { 

    test: function(req,res) {
        console.log(req.body);
        db.User.find({email: req.body.email})  // or username
        .then(user => {
            if (user)
            db.SavedList.create(req.body)
                .then(game => res.json(game))
                .catch(err => res.status(422).json(err));
        })
    },

    populate: function(req,res) {
        db.User.findOne({email: req.body.email})
            .populate(email).then(response => console.log(response));
    }
}