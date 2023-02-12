const router = require('express').Router();


const {
    getThoughts,
    getAThought,
    createThought,
    addReaction,
    deleteReaction,
    updateThought,
    deleteThought,

} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getAThought)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;