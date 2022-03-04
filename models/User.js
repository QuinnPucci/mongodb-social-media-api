const { Schema, model } = require("mongoose")
const dateFormat = require('../utils/dateFormat')

const UserSchema = new Schema ({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        validate: [validateEmail, "Please fill a valid email address."],
        match: [
        /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/,
        "Please fill a valid email address",
        ],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
    ],

    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
{
    toJSON: {
      virtuals: true
    },
    id: false
  }
)

// adjust this
UserSchema.virtual('friendCount').get(function(){
    return this.freinds.length
})

const User = model('User', UserSchema)
module.exports = User