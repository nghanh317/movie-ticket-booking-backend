const authService = require('../services/authService');

const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);

        res.status(201).json({
            success: true,
            message: "Register success",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const data = await authService.login(req.body);
        res.json({
            message: "Login success",
            ...data
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { register, login };