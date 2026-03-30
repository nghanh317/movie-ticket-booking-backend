const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authMiddleware, authorizeRoles } = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// test role
router.get('/admin', authMiddleware, authorizeRoles('admin'), (req, res) => {
    res.json({ message: "Hello Admin" });
});

router.get('/staff', authMiddleware, authorizeRoles('staff'), (req, res) => {
    res.json({ message: "Hello Staff" });
});

router.get('/user', authMiddleware, authorizeRoles('user'), (req, res) => {
    res.json({ message: "Hello User" });
});

module.exports = router;