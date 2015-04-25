'use strict';

var _ = require('lodash');
var Authorization = require('./authorization.model');

exports.check = function(req, res) {
  return res.json(200, true);
/*
  Authorization.find(function (err, authorizations) {
    if(err) { return handleError(res, err); }
    return res.json(200, authorizations);
  });
*/
};

// Get list of authorizations
exports.index = function(req, res) {
  Authorization.find(function (err, authorizations) {
    if(err) { return handleError(res, err); }
    return res.json(200, authorizations);
  });
};

// Get a single authorization
exports.show = function(req, res) {
  Authorization.findById(req.params.id, function (err, authorization) {
    if(err) { return handleError(res, err); }
    if(!authorization) { return res.send(404); }
    return res.json(authorization);
  });
};

// Creates a new authorization in the DB.
exports.create = function(req, res) {
  Authorization.create(req.body, function(err, authorization) {
    if(err) { return handleError(res, err); }
    return res.json(201, authorization);
  });
};

// Updates an existing authorization in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Authorization.findById(req.params.id, function (err, authorization) {
    if (err) { return handleError(res, err); }
    if(!authorization) { return res.send(404); }
    var updated = _.merge(authorization, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, authorization);
    });
  });
};

// Deletes a authorization from the DB.
exports.destroy = function(req, res) {
  Authorization.findById(req.params.id, function (err, authorization) {
    if(err) { return handleError(res, err); }
    if(!authorization) { return res.send(404); }
    authorization.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
