var assert = require('assert');
var augur = require('../');
var awaitThisMany = require('collect').awaiter.num;

describe('Augur', function() {
  it('should call back properly', function(done) {
    var p = augur();
    
    setTimeout(function() { p("omg!") }, 50);

    p.then(function(result) {
      assert.equal(result, "omg!");
      done();
    });
  });

  it('should call back properly to two functions', function(done) {
    var p = augur();
    
    setTimeout(function() { p(null, "omg!") }, 50);

    var awaiter = awaitThisMany(2);
    p.then(awaiter());
    p.then(awaiter());
    
    awaiter.then(function(err, res) {
      assert.equal(res[0], 'omg!');
      assert.equal(res[1], 'omg!');
      done();
    });
  });

  it('should handle new callbacks after result is resolved', function(done) {
    var p = augur();
    
    setTimeout(function() { p("omg!") }, 50);

    p.then(function(result) {
      assert.equal(result, "omg!");
      p.then(function(result) {
        assert.equal(result, "omg!");
        done();
      });
    });
  });
});
