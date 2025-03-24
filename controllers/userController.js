const User = require('../models/User');

module.exports = {
async getUser(req, res) {
    try {
        const users = await User.find().populate('friends thoughts');
        res.json(users)
    } catch (err) {
        res.status(500).json(err)
    }
},

async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Error creating' })
    }
},
};