export default class MyComponent extends HTMLElement {
  static get observedAttributes() {
    return ['data-path-attributes']
  }

  connectedCallback() {
    return this.render()
  }
  attributeChangedCallback() {
    return requestAnimationFrame(() => {
      this.render()
    })
  }
  getProperties() {
    var props = {}
    for (var i = 0; i < this.attributes.length; i++) {
      var { name, value } = this.attributes[i]
      if (value?.length > 80) {
        props[name] = value.substring(0, 80) + '...'
      } else {
        props[name] = value
      }
    }
    return props
  }

  render() {
    this.innerHTML =
      '<h2>Active attributes</h2><button class="-button">He1e12e12e12ello</button><pre>' +
      JSON.stringify(this.getProperties(), 2, 2) +
      '</pre>'
  }
}

if (!window.customElements.get('my-custom-component')) {
  window.customElements.define('my-custom-component', MyComponent)
}
