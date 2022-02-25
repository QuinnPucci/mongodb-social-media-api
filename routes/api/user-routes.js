const router = require('express').Router()
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller')

// /api/user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser)

// /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// /api/user/id/friends/:friendId
// router
//     .post()
//     .delete()

module.exports = router