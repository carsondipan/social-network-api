const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Reaction',
            },
        ],

    },
);

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId,
        },
        reactionBody: {
            type: String, 
            required: true
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            type: Date, default: Date.now
        },
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return Object.keys(this.reactions).length;
    }
);

const Thought = mongoose.model('Thought', thoughtSchema);
const Reaction = mongoose.model('Reaction', reactionSchema);

const errHandler = (err) => console.error(err);

const init = async () => {
    await Reaction.deleteMany({});
    await Reaction.create(
        {
            reactionBody: 'beans haha',
            username: 'jawncena',
        },
        (err) => (err ? errHandler(err) : console.log('Created new reaction'))
    );
    await Thought.deleteMany({});
    await Thought.create(
        {
            thoughtText: 'dude what if we cooked it with gas',
            username: 'jawncena'
        },
        (err) => (err ? errHandler(err) : console.log('Created new thought'))
    );
};

init();

module.exports = Thought, Reaction;