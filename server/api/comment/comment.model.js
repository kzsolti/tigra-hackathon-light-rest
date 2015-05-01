'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sysDate = function () {
  return new Date();
};

var CommentSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: sysDate
  },
  content: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  deletedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Comment', CommentSchema);
