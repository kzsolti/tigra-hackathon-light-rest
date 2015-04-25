'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

describe('GET /api/authorizations', function() {

  it('should return true if admin edits user', function(done) {
    request(app)
      .get('/api/authorizations/admin/users/username/edit')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.info(res.body);
        res.body.auth.should.be.true;
        done();
      })
      /*.end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.equalTo(true);
        done();
      })*/;
  });

  it('should not allow editing user for anyone else except admin', function(done) {
    request(app)
      .get('/api/authorizations/username/users/username/edit')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        console.info(res.body);
        res.body.auth.should.be.false;
        done();
      })
      /*.end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.equalTo(true);
        done();
      })*/;
  });

/*
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/authorizations')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
*/
});
