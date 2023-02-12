const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getAThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Aint no thoughts w dat ID mayne!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought(req, res) {
        Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    // addReaction (req, res) {
    //     Thought.findById(req.params.thoughtId, function (err, event) {
    //         if(!err) {

    //         }
    //     })
    // },
    // deleteReaction (req,res) {
    //     Thought.findById(req.params.thoughtId, function (err, event){

    //     })
    // },
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID found.' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteThought(req, res) {
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought found with that ID ' })
                    : User.deleteMany({ _id: { $in: thought.users } })
            )
            .then(() => res.jston({ message: 'Thought and Users neutralized' }))
            .catch((err) => res.status(500).json(err));
    },
};