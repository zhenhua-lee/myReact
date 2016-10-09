function ReactDOMTextComponent(ele) {
  this._currentEle = ele;
  this._rootNodeId = null;
}

ReactDOMTextComponent.prototype.mountComponent = function (nodeId) {
  this._rootNodeId = nodeId;
  return `<span data-reactid="${nodeId || 0}">${this._currentEle}</span>`;
}

ReactDOMTextComponent.prototype.receiveComponent = function (nextText) {
  const newText = '' + nextText;
  if (this._currentEle !== newText) {
    this._currentEle = newText;
    document.querySelector(`[data-reactid=${this._rootNodeId}]`).innerHTML = newText;
  }
}

module.exports = ReactDOMTextComponent;
