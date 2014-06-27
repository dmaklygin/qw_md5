var assert = require('assert');
var md5 = require('blueimp-md5').md5;
var proxyquire =  require('proxyquire').noCallThru();
var testModule = proxyquire('../index', {
  internal: {
    api: function(lib) {
      switch (lib) {
        case 'md5':
          return require('blueimp-md5').md5;
      }
      return null;
    }
  }
});

describe('equals', function() {

  it('should equal to function type', function () {
    assert.equal(typeof testModule, 'function');
  });

  it('should equal with "native" md5', function () {
    assert.equal(testModule('test'), md5('test'));
  });

  it('should return true if same md5 hash', function () {
    assert.equal(testModule('test'), '098f6bcd4621d373cade4e832627b4f6');
  });

});