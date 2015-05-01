'use strict';

var express = require('express');
var controller = require('./post.controller');
var commentController = require('../comment/comment.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.hasRole('author'), controller.create);
router.put('/:id', auth.hasRole('author'), controller.update);
router.delete('/:id', auth.hasRole('author'), controller.destroy);

router.get('/:postid/comments', commentController.index);
router.get('/:postid/comments/:id', commentController.show);
router.post('/:postid/comments', auth.isAuthenticated(), commentController.create);
router.put('/:postid/comments/:id', auth.isAuthenticated(), commentController.update);
router.delete('/:postid/comments/:id', auth.isAuthenticated(), commentController.destroy);

module.exports = router;
