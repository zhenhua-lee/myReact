const ReactDOM = require('../lib/react-dom');
const React = require('../lib/react');
const Hello = React.createClass({
  render: function () {
    return React.createElement('div', null, [
      React.createElement('p', null, 'this is ok'),
      React.createElement('p', null, 'this is no'),
    ]);
  }
});

const ele = React.createElement(Hello, {hello: 'mt&dp'});

ReactDOM.render(ele, document.getElementById('app'));