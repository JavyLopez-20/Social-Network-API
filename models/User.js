const { Schema, model } = require('mongoose');
const { validator } = require('validator');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
    },
    email: {
        type: String,
        required: true,
        trimmed: true,
        validate: [validator.email, "Invalid Email"],
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
});
const User = model('User', userSchema);
module.exports = User;