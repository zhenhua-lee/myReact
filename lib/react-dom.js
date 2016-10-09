const instantiateComponent = require('./instantiateComponent');

module.exports = {
  reactId: 0,
  render: function (element, container) {
    const instance = instantiateComponent(element);
    const markup = instance.mountComponent(this.reactId++);
    container.innerHTML = markup;
  }
}