function ReactDOMComponent (ele) {
  this._currentElement = ele;
  this._rootNodeId = null;
}
ReactDOMComponent.prototype.mountComponent = function (nodeId) {
  this._rootNodeId = nodeId;
  const type = this._currentElement.type;
  const props = this._currentElement.props;
  const markupArr = [];
  markupArr.push(`<${type} data-reactid=${nodeId}`);

  for(var key in props) {
    if (props.hasOwnProperty('key')) {
      if (key !== 'children') {
        markupArr.push(` {key}=${props[key]}`);
      }
    }
  }
  markupArr.push('>');

  const children = props.children;
  for(var i=0; i<children.length; i++) {
    const instantiateComponent = require('./instantiateComponent');
    const childrenInstance = instantiateComponent(children[i]);
    const childKey = this._rootNodeId + '.' + i;
    markupArr.push(childrenInstance.mountComponent(childKey));
  }
  markupArr.push(`</${type}>`);
  return markupArr.join('');
}

module.exports = ReactDOMComponent;
