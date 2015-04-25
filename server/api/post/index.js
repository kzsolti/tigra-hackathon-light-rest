'use strict';

var express = require('express');
var controller = require('./post.controller');
var commentController = require('../comment/comment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

router.get('/:postid/comments', commentController.index);
router.get('/:postid/comments/:id', commentController.show);
router.post('/:postid/comments', commentController.create);
router.put('/:postid/comments/:id', commentController.update);
router.patch('/:postid/comments/:id', commentController.update);
router.delete('/:postid/comments/:id', commentController.destroy);

module.exports = router;
