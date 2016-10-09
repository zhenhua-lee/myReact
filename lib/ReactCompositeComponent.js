function ReactCompositeComponent(ele) {
  this._currentElement = ele;
  this._rootNodeId = null;
  this._instance = null;
}
ReactCompositeComponent.prototype.mountComponent = function(nodeId) {
  this._rootNodeId = nodeId;
  const ReactClass = this._currentElement.type;
  const props = this._currentElement.props;
  const publicInstance = new ReactClass(props);
  this._instance = publicInstance;

  const renderElement = publicInstance.render();
  const instantiateComponent = require('./instantiateComponent');
  const renderElemntInstance = instantiateComponent(renderElement);

  return renderElemntInstance.mountComponent();
}

module.exports = ReactCompositeComponent;
