const ReactDOMTextComponent = require('./ReactDOMTextComponent');
const ReactDOMComponent = require('./ReactDOMComponent');
const ReactCompositeComponent = require('./ReactCompositeComponent');

function instantiateComponent (node) {
  if (typeof node === 'string' || typeof node === 'number') {
    return new ReactDOMTextComponent(node);
  } else if (typeof node === 'function' || typeof node.type === 'string') {
    return new ReactDOMComponent(node);
  } else if (typeof node === 'function' || typeof node.type === 'function') {
    return new ReactCompositeComponent(node);
  }
}

module.exports = instantiateComponent;