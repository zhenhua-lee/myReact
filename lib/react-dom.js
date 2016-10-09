const instantiateComponent = require('./instantiateComponent');

module.exports = {
  render: function (element, container) {
    const ele = instantiateComponent(element);
    const markup = ele.mountComponent();
    container.innerHTML = markup;
  }
}