module.exports = function() {
  var listeners = [];
  var returns = null;
  function fire() { 
    if (!listeners.length || returns == null) return;
    while (listeners.length) listeners.pop().apply(this, returns);
  }
  function augur() { 
    returns = [].slice.call(arguments);
    fire();
    return augur;
  }
  augur.then = function(cb) {
    listeners.push(cb);
    fire();
    return augur;
  };
  return augur;
};
