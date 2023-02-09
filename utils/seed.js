const connection = require('../config/connection');
const { Thought, User } = require('../models')

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];

    for (let i = 0; i<20; i++) {
        
    }
});