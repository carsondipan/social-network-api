const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models')

module.exports = {
    getUsers (req, res) {
        User.find()
            .then(async (users) =>{
                const userObj = {
                    users,
                }
            })
            .catch((err) =>)
    }
}