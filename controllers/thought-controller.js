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

    }
    // update thought by ID

    // delete thought by ID

    // create a reaction

    // delete a reaction

}

module.exports = thoughtController