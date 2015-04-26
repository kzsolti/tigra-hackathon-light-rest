'use strict';

var _ = require('lodash');
var Post = require('./post.model');

// Get list of posts
exports.index = function(req, res) {
  if (req.query.count !== undefined) {
    Post.count(function (err, count) {
      if(err) { return handleError(res, err); }
      return res.json(200, { postCount: count });
    });
  } else {
		var query = Post.find().sort({ createdOn: 'desc' });
    if (req.query.skip) {
      query.skip(req.query.skip);
    }
    if (req.query.limit) {
      query.limit(req.query.limit);
    }
    query.exec(function (err, posts) {
      if(err) { return handleError(res, err); }
      return res.json(200, posts);
    });
  }
};

// Get a single post
exports.show = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    return res.json(post);
  });
};

// Creates a new post in the DB.
exports.create = function(req, res) {
  if (!req.body.createdOn) {
    req.body.createdOn = new Date();
  }
  Post.create(req.body, function(err, post) {
    if(err) { return handleError(res, err); }
    return res.json(201, post);
  });
};

// Updates an existing post in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Post.findById(req.params.id, function (err, post) {
    if (err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    var updated = _.merge(post, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, post);
    });
  });
};

// Deletes a post from the DB.
exports.destroy = function(req, res) {
  Post.findById(req.params.id, function (err, post) {
    if(err) { return handleError(res, err); }
    if(!post) { return res.send(404); }
    post.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
