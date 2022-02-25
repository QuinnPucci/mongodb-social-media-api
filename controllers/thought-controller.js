const { Thought } = require("../models")

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})

        // ?  

    },

    // get one thought by ID
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })

        // ?

    },

    // create a new thought
    createThought({ params, body }, res) {
        Thought.create(body)

    },

    // update thought by ID
    updateThought({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }) // ?

    },

    // delete thought by ID
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId }) 

    },

    // create a reaction
    createReaction({ params, body}, res) {
        Thought.findOneAndUpdate (

        )
    },
    
    // delete a reaction
    deleteReaction({ params }, res) {
        Comment.findOneAndUpdate(
        
        )
    }

}

module.exports = thoughtController