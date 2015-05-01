/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var User = require('../api/user/user.model');
var Post = require('../api/post/post.model');
var Comment = require('../api/comment/comment.model');

var populateComments = function () {
  Comment.find({}).remove(function () {
    User.findOne({name: 'Test User'}, function (err, user) {
      if (err) {
        console.error(err);
      } else {
        Post.findOne({title: 'Welcome to TLog!'}, function (err, post) {
          if (err) {
            console.error(err);
          } else {
            Comment.create({
              author: user._id,
              post: post._id,
              content: 'First!!!'
            }, function () {
              console.log('finished populating comments');
            });
          }
        })
      }
    })
  })
};

var populatePosts = function () {
  User.findOne({name: 'Admin'}, function (err, admin) {
    if (err) {
      console.error(err);
    } else {
      Post.find({}).remove(function () {
        Post.create({
          author: admin._id,
          title: 'Welcome to TLog!',
          summary: 'Our new blog has opened up, come in and look around.',
          content: 'This is our first blog post, so be sure read it and comment!',
          createdOn: new Date()
        }, {
          author: admin._id,
          title: 'Big news ahead!',
          summary: 'TLog is now officially up and running.',
          content: 'Become an author on this new and exciting blog site! Contact Admin to learn how.',
          createdOn: new Date()
        }, function () {
          console.log('finished populating posts');
          populateComments();
        })
      });
    }
  })
};

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
    console.log('finished populating users');
    populatePosts();
  });
});