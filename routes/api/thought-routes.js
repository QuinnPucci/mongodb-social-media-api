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
router.route('/')
.get(getAllThoughts)

// /thoughts:id
router.route('/:id')
.get(getThoughtById)
.post(createThought)
.put(updateThought)
.delete(deleteThought)

// /thoughts/:id/reactions/:id
router.route('/:id/reactions/:id')
.post(createReaction)
.delete(deleteReaction)


module.exports = router