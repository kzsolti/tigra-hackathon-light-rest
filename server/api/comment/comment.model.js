'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  post: Schema.Types.ObjectId,
  createdOn: Date,
  content: String,
  deleted: { type: Boolean, default: false },
  deletedBy: Schema.Types.ObjectId,
  likes: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Comment', CommentSchema);
