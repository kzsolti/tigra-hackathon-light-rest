'use strict';

var express = require('express');
var controller = require('./authorization.controller');

var router = express.Router();

router.get('/:username/users/:ausername/:function', controller.checkUserRelated);
router.get('/:username/posts/:function', controller.checkPostRelated);

/*
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
*/

module.exports = router;
