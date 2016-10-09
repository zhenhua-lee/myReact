const extend = require('extend');

function createClass(spec) {
  function ReactClass(props) {
    this.props = props;
    this.state = this.getInitState ? this.getInitState() : null;
  }
  ReactClass.prototype = extend({}, spec);
  ReactClass.prototype.constructor = ReactClass;
  return ReactClass;
}

module.exports = createClass;