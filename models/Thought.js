const { Schema, model, Types } = require('mongoose'); // what is types? do I need it?
const dateFormat = require('../utils/dateFormat');

const ReplySchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true
      },
      writtenBy: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
)

const ThoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        // character count
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      },
      writtenBy: {
        type: String,
        required: true,
      },
      // use ReactionSchema to validate data for a reaction
      reactions: [ReactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false // false or true?
    }
  );

ThoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema)

module.exports = Thought