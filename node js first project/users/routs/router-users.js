const express = require('express');
const router = express.Router();
const controller = require('../controller/controller-users');


router.get('/login_user', controller.loginUser);

router.post('/signup_user', controller.signupUser);

router.get('/get_all_users', controller.isAdminMiddleware, controller.getAllUsers)

router.get('/get_user/:id', controller.isAdminOrAouthMiddleware, controller.getUser);

router.put('/update_user/:id', controller.isAuthMiddleware, controller.updateUser);

router.delete('/delete_user/:id', controller.isAdminOrAouthMiddleware, controller.deleteUser);


module.exports = router;