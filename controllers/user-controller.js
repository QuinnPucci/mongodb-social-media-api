const { User, Thought } = require('../models')

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            res.sendStatus(500).json(err)
        })  
    },

    // get one user by ID
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate("friends")
        .populate("thoughts")
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            res.sendStatus(500).json(err)
        })  
    },

    // create a new user
    createUser({ body }, res ) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // update user
    updateUser({ params }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
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
    },

    // add friend
    addFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, {$push: {friends: params.friendId}}, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            } 
        })
            .catch(err => res.json(err));     
    },

    // delete friend
    deleteFriend({ params }, res) {
        User.findOneAndUpdate({ _id: params.userId }, {$pull: {friends: params.friendId}}, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No User found with this id!' });
                return;
            } 
        })
            .catch(err => res.json(err));     
    }
}

module.exports = userController