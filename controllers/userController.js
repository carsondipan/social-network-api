const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models/User')

module.exports = {
    getUsers (req, res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    getSingleUser (req, rs) {
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('posts')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'uhhhh... no user w that id...'})
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    createUser(req, res) {
        User.create(req.body)
            .then((dbUserData) => res.json(dbUserData))
            .catch((err) => res.status(500).json(err));
    },
};