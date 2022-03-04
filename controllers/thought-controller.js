const { Thought } = require("../models")

const thoughtController = {
    // get all thoughts
    getAllThoughts(req, res) {
        Thought.find({})
        .then(dbThoughts =>  res.json(dbThoughts))
        .catch ( err => {
            res.sendStatus(500).json(err)
        })
    },

    // get one thought by ID
    getThoughtById({ params }, res) {
        Thought.findOne({ _id: params.id })
        .then(dbThoughts => {
            if(!dbThoughts) {
                res.status(404).json("User not found")
            }
        })
        .catch ( err => {
            res.sendStatus(500).json(err)
        })
    },

    // create a new thought
    createThought({ params, body }, res) {
        Thought.create(body)
        .then(({ _id }) => {
            // Add the thought to a user.
            return User.findOneAndUpdate(
              { _id: body.userId },
              // User $push method to add thought's _id to the specific user we want to update - adds data to an array.
              { $push: { thoughts: _id } },
              // Means we are receiving the updated user.
              { new: true }
            );
          })
          .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No user found with this id." });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.json(err));

    },

    // update thought by ID
    updateThought({ params }, res) {
        Thought.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then((dbThoughtData) => {
            if (!dbThoughtData) {
              res.status(404).json({ message: "No thought found with this id!" });
              return;
            }
            res.json(dbThoughtData);
          })
          .catch((err) => res.status(400).json(err));
    },

    // delete thought by ID
    deleteThought({ params }, res) {
        Thought.findOneAndDelete({ _id: params.thoughtId }) 

    },

    // create a reaction
    createReaction({ params, body}, res) {
        Thought.findOneAndUpdate (
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, reunValidators: true }
        )
        .populate({ path: "reactions", select: "-__v" })
        .select("-__v")
        .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbThoughtData);
        })
      .catch((err) => res.json(err));
    },
    
    // delete a reaction
    deleteReaction({ params }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            {
                $pull: {
                reactions: { reactionId: params.reactionId },
                },
            },
            { new: true }
        )
        .then((dbThoughtData) => res.json(dbThoughtData))
        .catch((err) => res.json(err));
    }

}

module.exports = thoughtController