const router = require('express').Router()

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller')

// /thoughts
router.route('/thoughts')
.get(getAllThoughts)

// /thoughts:id
router.route('/thoughts/:id')
.get(getThoughtById)
.post(createThought)
.put(updateThought)
.delete(deleteThought)

// /thoughts/:id/reactions/:id
router.route('/thoughts/:id/reactions/:id')
.post(createReaction)
.delete(deleteReaction)


module.exports = router