const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

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
    updateUser(req,res) {
        User.findOneAndUpdate({ _id: req.params.userId})
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found with that ID'})
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err)
            });
    },
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    deleteUser(req,res) {
        User.findOneAndRemove({_id: req.params.userId})
            .then((user) =>
                !student
                    ?res.status(404).json({ message: 'No user found with that ID' })
                    : User.findOneAndUpdate(
                        {users: req.params.userId},
                        {$pull: { students: req.params.userId }},
                        {new: true }
                    )
            )
            .then((thought) => 
                !thought
                        ?res.status(404).json({
                            message: 'Deleted, but no thought found.',
                            })
                        : res.json({ message: 'Deletion complete.'})
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    addFriend(req,res) {
      User.findOneAndUpdate({_id: req.params.userId}, {$push:{friends: req.params.friendsId}}, {new: true})
        .then((user) =>
            {
                res.status(200).json(user)
            }
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })
    },
    deleteFriend(req,res) {
        User.findOneAndUpdate({ _id: req.params.userId}, {$pull:{friends: req.params.friendsId}}, { new: true })
            .then((user) =>
                {
                    res.status(200).json(user)
                }
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            })
    },
};