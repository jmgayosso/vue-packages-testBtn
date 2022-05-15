/*!
 * @jmgayosso/test-btn v1.0.1
 * (c) jmgayosso
 * Released under the ISC License.
 */
'use strict';

var vue = require('vue');

var script = {
  name: 'test-btn',
  methods: {
    click: function click() {
      alert('Clicked');
    }
  }
};

var _hoisted_1 = {
  id: "container"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [vue.createElementVNode("button", {
    onClick: _cache[0] || (_cache[0] = function () {
      return $options.click && $options.click.apply($options, arguments);
    })
  }, " This is a test!! ")]);
}

script.render = render;

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("test-btn", script);
  }
};

module.exports = index;
