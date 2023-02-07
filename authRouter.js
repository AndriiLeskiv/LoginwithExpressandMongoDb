const Router = require('express');
const router = new Router();
const controller = require('./authController');
const {check} = require('express-validator');
const authMiddlewaree = require('/middlewaree/authMiddlewaree');
const roleMiddlewaree = require('/middlewaree/roleMiddleware');

router.post('/registration',[
    check('username', "Поле ім'я не може бути пустим").notEmpty(),
    check('password', "Поле пароля не може бути пустим").isLength({min: 4, max: 15}),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddlewaree(['USER', 'ADMIN']), controller.getUsers);

module.exports = router;