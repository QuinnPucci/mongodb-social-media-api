const router = require('express').Router()

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReply,
    deleteReaction
} = require('../../controllers/thought-controller')

router
.route('/thoughts')


router
.route('/thoughts/:id')



module.exports = router