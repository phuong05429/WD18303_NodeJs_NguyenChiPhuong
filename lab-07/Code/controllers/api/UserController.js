const User = require('../../models/User');

exports.signUpUser = async (req, res, next) => { 
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };
    const userResponse = await User.create(user, {
        fields: ['name', 'email', 'password'] // Only return the id, name and
    });
    res.status(200).json({
        data: userResponse
    });
}