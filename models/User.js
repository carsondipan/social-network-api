const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        thoughts: { type: Array },
        friends: { type: Array },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
    .virtual('friendCount')
    .get(function () {
        return this.friends.length;
    })

const User = mongoose.model('user', userSchema);

const errorHandle = (err) => console.error(err);

const init = async () => {
    await User.deleteMany({});
    await User.create(
        {
            username: 'jawncena',
            email: 'jawncena@gmail.com',
            thoughts: [1,2,3],
            friends: [1,2,3],
        },
        (err) => (err ? errorHandle(err) : console.log('New user created.'))
    );
};

init();

module.exports = User;