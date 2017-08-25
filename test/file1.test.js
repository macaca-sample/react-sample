'use strict';

const {
  appendToContext
} = require('macaca-reporter');

const cwd = process.cwd();

describe('test/file1.test.js', function() {

  afterEach(function(done) {
    const that = this;
    setTimeout(() => {
      Macaca.screenshot({
        directory: `${cwd}/screenshots/${that.currentTest.title}.png`,
        height: 600,
        width: 375
      }, (e) => {
        appendToContext(that, `${cwd}/screenshots/${that.currentTest.title}.png`);
        done();
      });
    }, 500);
  });

  describe('antd mobile components1', function() {
    it('should be ok', function() {
      
    });
  });

});
