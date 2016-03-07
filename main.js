var AFRAME = require('aframe-core');
var components = require('aframe-physics-components').components;

Object.keys(components).forEach(function (componentName) {
  AFRAME.registerComponent(componentName, components[componentName]);
});
