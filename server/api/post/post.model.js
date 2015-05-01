'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var sysDate = function () {
  return new Date();
};

var PostSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdOn: {
    type: Date,
    required: true,
    default: sysDate
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

module.exports = mongoose.model('Post', PostSchema);
