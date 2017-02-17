!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory(require("Tooltip")):"function"==typeof define&&define.amd?define(["Tooltip"],factory):"object"==typeof exports?exports.VTooltip=factory(require("Tooltip")):root.VTooltip=factory(root.Tooltip)}(this,function(__WEBPACK_EXTERNAL_MODULE_2__){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.i=function(value){return value},__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=3)}([function(module,__webpack_exports__,__webpack_require__){"use strict";function createTooltip(el,value,modifiers){var position="top-center",_iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=positions[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var pos=_step.value;modifiers[pos]&&(position=pos)}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}position=position.replace("-"," ");var content=value.content||value,classes=directive.options.defaultClass;value.classes&&(classes=value.classes),el._tooltip=new __WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default.a({target:el,position:position,content:content,classes:classes,tetherOptions:directive.options.tetherOptions})}function destroyTooltip(el){el._tooltip&&(el._tooltip.destroy(),delete el._tooltip)}var __WEBPACK_IMPORTED_MODULE_0_tether_tooltip__=__webpack_require__(2),__WEBPACK_IMPORTED_MODULE_0_tether_tooltip___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether_tooltip__),__WEBPACK_IMPORTED_MODULE_1__utils__=__webpack_require__(1);__webpack_require__.d(__webpack_exports__,"a",function(){return defaultOptions});var positions=["top-left","left-top","left-middle","left-bottom","bottom-left","bottom-center","bottom-right","right-bottom","right-middle","right-top","top-right","top-center"],defaultTetherOptions={constraints:[{to:"window",attachment:"together",pin:!0}]},defaultOptions={tetherOptions:defaultTetherOptions,defaultClass:"vue-tooltip-theme"},directive={options:defaultOptions,bind:function(el,_ref){var value=_ref.value,modifiers=_ref.modifiers,content=value.content||value;destroyTooltip(el),content&&createTooltip(el,value,modifiers)},update:function(el,_ref2){var value=_ref2.value,oldValue=_ref2.oldValue,modifiers=_ref2.modifiers,content=value.content||value;if(content)if(el._tooltip){var drop=el._tooltip.drop;drop.content.innerHTML=content;var oldClasses=oldValue&&oldValue.classes;value&&value.classes?oldClasses?__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.a)(drop.drop,value.classes,oldClasses):__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.b)(drop.drop,value.classes):oldClasses&&__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__.c)(drop.drop,oldClasses)}else createTooltip(el,value,modifiers);else destroyTooltip(el)},unbind:function(el){destroyTooltip(el)}};__webpack_exports__.b=directive},function(module,__webpack_exports__,__webpack_require__){"use strict";function convertToArray(value){return"string"==typeof value&&(value=value.split(" ")),value}function addClasses(el,classes){classes=convertToArray(classes),classes.forEach(function(c){el.classList.add(c)})}function removeClasses(el,classes){classes=convertToArray(classes),classes.forEach(function(c){el.classList.remove(c)})}function replaceClasses(el,newClasses,oldClasses){removeClasses(el,oldClasses),addClasses(el,newClasses)}__webpack_exports__.b=addClasses,__webpack_exports__.c=removeClasses,__webpack_exports__.a=replaceClasses},function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__},function(module,__webpack_exports__,__webpack_require__){"use strict";function install(Vue,options){options=Object.assign({},__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.a,options||{}),__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b.options=options,Vue.directive("tooltip",__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b)}Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__v_tooltip__=__webpack_require__(0);__webpack_exports__.install=install,__webpack_require__.d(__webpack_exports__,"VTooltip",function(){return VTooltip});var VTooltip=__WEBPACK_IMPORTED_MODULE_0__v_tooltip__.b;__webpack_exports__.default={install:install}}])});