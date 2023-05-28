const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String,
        minlength: [3, "emri duhet te jete me i gjate se 3 "] ,
        required: [true,"This field is required"]
    },
    imgURL: {
        type: String,
        required: [true,"This field is required"]
    },
    phrase: {
        type: String,
        required: [true,"This field is required"]
    },
    position:{
        type: String,
        required: [true,"This field is required"]
    },
    treasures: {
        type: Number,
        required: [true,"This field is required"]
    },
    pegleg: {
        type: Boolean,
        default: 'true'
    },
    eyepatch: {
        type: Boolean,
        default: 'true'
    },
    hookhand: {
        type: Boolean,
        default: 'true'
    }
},
 { timestamps: true });
module.exports = mongoose.model('User', UserSchema);