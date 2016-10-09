const extend = require('extend');
const ReactElement = function (type, key, props) {
  this.type = type;
  this.key = key;
  this.props = props;
};

ReactElement.createElement = function(type, props, children) {
  const key = (props && props.key) || null;
  props && delete props.key;
  const finalProps = extend({}, props, {children});
  return new ReactElement(type, key, finalProps);
}

module.exports = ReactElement;
