const ReactDOMTextComponent = require('./ReactDOMTextComponent');

function instantiateComponent (ele) {
  if (typeof ele === 'string' || typeof ele === 'number') {
    return new ReactDOMTextComponent(ele);
  }
}

module.exports = instantiateComponent;