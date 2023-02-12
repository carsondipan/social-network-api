const { Thought, User } = require('../models');

module.exports = {
    getThoughts (req, res) {
        Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    getAThought (req, res) {
        Thought.findOne({ _id: req.params.thoughtId})
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'Aint no thoughts w dat ID mayne!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    createThought (req, res) {
        Thought.create(req.body)
            .then((thought) => {
                return 
            })
    },
    addReaction (req, res) {
        Thought.findById(req.params.thoughtId, function (err, event) {
            if(!err) {
                
            }
        })
    },
    updateThought (req, res) {

    },
    deleteThought (req, res) {

    },
    
}