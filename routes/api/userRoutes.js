const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    addFriend,
    deleteFriend,
    updateUser,

} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).delete(deleteUser);

router.route('/:userId').put(updateUser);

router.route('/:userId/friends/:friendId').post(addFriend);

router.route('/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;

