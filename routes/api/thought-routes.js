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

//
router.route('/:thoughtId/reactions').post(createReaction)

router.route('/:thoughtId/reactions/reactionsId').delete(deleteReaction)


module.exports = router