function ReactDOMTextComponent(ele) {
  this._currentEle = ele;
  this._rootNodeId = null;
}

ReactDOMTextComponent.prototype.mountComponent = function (nodeId) {
  this._rootNodeId = nodeId;
  return `<span data-reactid="${nodeId || 0}">${this._currentEle}</span>`;
}

module.exports = ReactDOMTextComponent;