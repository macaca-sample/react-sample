'use strict';

const path = require('path');
const {
  appendToContext
} = require('macaca-reporter');

const cwd = process.cwd();

describe('test/file1.test.js', function() {

  const containerId = 'example';

  before(function() {
    let container = document.createElement('div');
    container.id = containerId;
    container.style.width = '375px';
    container.style.height = '600px';
    document.body.insertBefore(container, document.body.firstChild);
  });

  after(function() {
    document.body.removeChild(document.getElementById(containerId));
  });

  describe('antd mobile components11', function() {

    beforeEach(function() {
      document.getElementById(containerId).innerHTML = '';
    });

    afterEach(function(done) {
      const that = this;
      console.log(cwd)
      const filepath = path.join(cwd, 'screenshots', `${that.currentTest.title}.png`)
      const reportspath = path.join(cwd, 'reports');
      setTimeout(() => {
        Macaca.screenshot({
          directory: filepath,
          height: 600,
          width: 375
        }, (e) => {
          appendToContext(that, filepath);
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

  describe('antd mobile components22', function() {

    afterEach(function(done) {
      const that = this;
      const filepath = path.join(cwd, 'screenshots', `${that.currentTest.title}.png`)
      const reportspath = path.join(cwd, 'reports');
      setTimeout(() => {
        Macaca.screenshot({
          directory: filepath,
          height: 600,
          width: 375
        }, (e) => {
          appendToContext(that, filepath);
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


