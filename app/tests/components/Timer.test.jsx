var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleSetTimer', () => {
    it('should start timer on started status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 10});
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(11);
        expect(timer.state.countStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 3});
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(3);
        expect(timer.state.countStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset timer on stopped status', (done) => {
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.setState({count: 3});
      timer.handleStatusChange('started');
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.countStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
