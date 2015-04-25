'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  author: Schema.Types.ObjectId,
  title: String,
  summary: String,
  content: String,
  createdOn: Date,
  deleted: { type: Boolean, default: false },
  deletedBy: Schema.Types.ObjectId,
  likes: [Schema.Types.ObjectId]
});

module.exports = mongoose.model('Post', PostSchema);
