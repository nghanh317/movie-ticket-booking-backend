const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.get('/login', (req, res) => {
    res.send("Login API is working");
});
router.post('/create-staff', authMiddleware, authorizeRoles('admin'), createStaff);

module.exports = router;