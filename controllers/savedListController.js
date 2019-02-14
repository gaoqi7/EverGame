const db = require('../models');

module.exports = { 

    test: function(req,res) {
        console.log(req.body);
        db.User.find({email: req.body.email})
        .then(user => {
            if (user)
            db.SavedList.create(req.body)
                .then(game => res.json(game))
                .catch(err => res.status(422).json(err));
        })
    }
}