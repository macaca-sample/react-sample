'use strict';

const {
  appendToContext
} = require('macaca-reporter');
const cwd = process.cwd();

describe('test/file2.test.js', function() {

  describe('antd mobile components1', function() {

    beforeEach(function() {
      let container = document.createElement('div');
      container.id = 'example';
      container.style.width = '375px';
      container.style.height = '600px';
      document.body.insertBefore(container, document.body.firstChild);
    })

    afterEach(function(done) {
      const that = this;
      setTimeout(() => {
        Macaca.screenshot({
          directory: `${cwd}/screenshots/${that.currentTest.title}.png`,
          height: 600,
          width: 375
        }, (e) => {
          appendToContext(that, `${cwd}/screenshots/${that.currentTest.title}.png`);
          document.body.removeChild(document.getElementById('example'));
          done();
        });
      }, 1500);
    });

    it('Progress should be ok', function() {
      window._test.progress();
    });

    it('H5NumberInput should be ok', function() {
      window._test.h5NumberInput();
    });
  });

  describe('antd mobile components2', function() {

    beforeEach(function() {
      let container = document.createElement('div');
      container.id = 'example';
      container.style.width = '375px';
      container.style.height = '600px';
      document.body.insertBefore(container, document.body.firstChild);
    })

    afterEach(function(done) {
      const that = this;
      setTimeout(() => {
        Macaca.screenshot({
          directory: `${cwd}/screenshots/${that.currentTest.title}.png`,
          height: 600,
          width: 375
        }, (e) => {
          appendToContext(that, `${cwd}/screenshots/${that.currentTest.title}.png`);
          document.body.removeChild(document.getElementById('example'));
          done();
        });
      }, 1500);
    });

    it('List should be ok', function() {
      window._test.list();
    });

    it('Button should be ok', function() {
      window._test.button();
    });
  });
});

