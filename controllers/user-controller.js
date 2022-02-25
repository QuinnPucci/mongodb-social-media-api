const { User, Thought } = require('../models')

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})

        // ?
        
    },

    // get one user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })

        // ?
    },

    // create a new user
    createUser({ body }, res ) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // update user
    updateUser({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }) // ?
        .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    }

    // add friend?

    // delete friend?
}

module.exports = userController