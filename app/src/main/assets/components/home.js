// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(9)
	)

	/* script */
	__vue_exports__ = __webpack_require__(10)

	/* template */
	var __vue_template__ = __webpack_require__(16)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/test/Documents/h5_study/weex_study/my_weex_demo/src/components/home.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-6ffec7a4"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

	module.exports = {
	  "textfont": {
	    "textAlign": "center",
	    "paddingTop": 20
	  }
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";

	//
	//
	//

	module.exports = {
	    data: {
	        items: []
	    },
	    methods: {}
	};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('text', {
	    staticClass: ["textfont"]
	  }, [_vm._v("我是来自子view")])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = {
	  "wrapper": {
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "position": "relative"
	  },
	  "dropdown": {
	    "justifyContent": "center",
	    "alignContent": "stretch",
	    "position": "relative",
	    "zIndex": 100
	  },
	  "button": {
	    "fontSize": 60,
	    "width": 450,
	    "textAlign": "center",
	    "marginTop": 30,
	    "marginLeft": 150,
	    "paddingTop": 20,
	    "paddingBottom": 20,
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "color": "#666666",
	    "borderColor": "#DDDDDD",
	    "backgroundColor": "#F5F5F5"
	  }
	}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _child = __webpack_require__(11);

	var _child2 = _interopRequireDefault(_child);

	var _switchbar = __webpack_require__(12);

	var _switchbar2 = _interopRequireDefault(_switchbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    data: function data() {
	        return {
	            showLoading: 'hide',
	            status: '1'
	        };
	    },

	    components: {
	        Child: _child2.default,
	        SwitchBar: _switchbar2.default
	    },
	    methods: {
	        callNative: function callNative() {
	            var mode = weex.requireModule('bridgeModule');
	            mode.printLogs("weex is beach", function (map) {
	                //modal.toast({title:"wori",duration:2})
	                //console.log(map);
	                //调用nativie中的方法打日志，得出回调成功了
	                weex.requireModule('bridgeModule').log(map);
	            });
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(6)
	)

	/* script */
	__vue_exports__ = __webpack_require__(7)

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/test/Documents/h5_study/weex_study/my_weex_demo/src/components/child.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-0e8d07a7"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(13)
	)

	/* script */
	__vue_exports__ = __webpack_require__(14)

	/* template */
	var __vue_template__ = __webpack_require__(15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/test/Documents/h5_study/weex_study/my_weex_demo/src/components/switchbar.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-1b378fea"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = {
	  "select-container": {
	    "justifyContent": "flex-start",
	    "flexDirection": "column",
	    "position": "relative"
	  },
	  "content": {
	    "width": 750,
	    "marginTop": 90
	  },
	  "mask": {
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "bottom": 0,
	    "right": 0,
	    "flex": 1,
	    "width": 750,
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "visibility": "hidden"
	  },
	  "select": {
	    "width": 650,
	    "height": 130,
	    "marginLeft": 50,
	    "textAlign": "center",
	    "justifyContent": "center",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "backgroundColor": "#eeeeee",
	    "borderRadius": 16,
	    "zIndex": 1001,
	    "position": "absolute",
	    "top": 0
	  },
	  "current-text": {
	    "color": "#333333",
	    "fontSize": 33,
	    "marginLeft": 30,
	    "flex": 1
	  },
	  "icon-arrow": {
	    "width": 27,
	    "height": 23,
	    "marginRight": 30
	  },
	  "options": {
	    "position": "relative",
	    "width": 650,
	    "marginLeft": 50,
	    "backgroundColor": "#eeeeee",
	    "transformOrigin": "center center",
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd",
	    "borderRadius": 16
	  },
	  "cell": {
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": 650,
	    "height": 130,
	    "paddingLeft": 30,
	    "paddingRight": 30,
	    "borderBottomWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#dddddd"
	  },
	  "name": {
	    "color": "#333333",
	    "fontSize": 33,
	    "flex": 1
	  },
	  "icon-curr-flag": {
	    "width": 32,
	    "height": 32
	  },
	  "current": {
	    "color": "#0088FB"
	  }
	}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var animation = weex.requireModule('animation');

	module.exports = {
	    data: function data() {
	        return {
	            current_translate: '',
	            statusId: '0',
	            status: [{
	                id: '0',
	                name: 'All'
	            }, {
	                id: '1',
	                name: 'Doing'
	            }, {
	                id: '2',
	                name: 'Done'
	            }],
	            flagSrc: 'https://gw.alicdn.com/tps/TB11a2lKFXXXXbVXpXXXXXXXXXX-32-32.png',
	            arrowSrc: 'https://gw.alicdn.com/tps/TB1O3_aKFXXXXXdXVXXXXXXXXXX-27-23.png'
	        };
	    },

	    computed: {
	        statusName: {
	            get: function get() {
	                var id = this.statusId;
	                return this.status.filter(function (s) {
	                    return s.id == id;
	                })[0].name;
	            }
	        }
	    },
	    mounted: function mounted() {
	        weex.requireModule('bridgeModule').printLog("refww " + this.$refs.options.offsetHeight);
	    },

	    methods: {
	        switchView: function switchView() {
	            this.toggleMaskVisible();
	            weex.requireModule('bridgeModule').printLog("ref " + this.$refs.options.offsetHeight);

	            this.opacity(this.$refs.mask);
	            this.collapse(this.$refs.options);
	            this.rotate(this.$refs.arrow);
	        },
	        onItemClick: function onItemClick(vid) {
	            weex.requireModule('bridgeModule').printLog("log " + vid);
	            // this.updateStatus(vid);
	            // this.switchView();
	            // this.$dispatch('statuschange', {
	            //     id: this.statusId,
	            //     name: this.statusName
	            // })
	        },
	        updateStatus: function updateStatus(id) {
	            this.statusId = id;
	        },
	        toggleMaskVisible: function toggleMaskVisible() {
	            this.current_showMask = !this.current_showMask;
	            var visibility = this.current_showMask ? 'visible' : 'hidden';
	            this.$refs.mask.setClassStyle({
	                visibility: visibility
	            });
	        },
	        collapse: function collapse(ref, callback) {
	            var platform = this.$getConfig().env.platform;
	            var translate = 'translate(0, -100%)'; // Web need % translate(0, 100%);
	            if (platform == 'iOS') {
	                translate = 'translate(0, 270)'; // ios bug && fixing
	            }
	            this.current_translate = this.current_translate ? '' : translate;
	            this.anim(ref, {
	                transform: this.current_translate
	            }, 'ease', 100, callback);
	        },
	        opacity: function opacity(ref, callback) {
	            var self = this;
	            self.current_opacity = self.current_opacity === 1 ? 0.1 : 1;
	            self.anim(ref, {
	                opacity: self.current_opacity
	            }, 'ease', 100, callback);
	        },
	        rotate: function rotate(ref, callback) {
	            var self = this;
	            if (!self.current_rotate) {
	                self.current_rotate = 0;
	            }
	            self.current_rotate = self.current_rotate + 180;
	            self.anim(ref, {
	                transform: 'rotate(' + self.current_rotate + 'deg)'
	            }, 'linear', 100, callback);
	        },
	        anim: function anim(ref, styles, timingFunction, duration, callback) {
	            animation.transition(ref, {
	                styles: styles,
	                timingFunction: timingFunction,
	                duration: duration
	            }, callback || function () {});
	        }
	    }
	};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["select-container"]
	  }, [_c('div', {
	    staticClass: ["content"]
	  }, [_vm._t("default")], 2), _c('div', {
	    ref: "mask",
	    staticClass: ["mask"],
	    on: {
	      "click": _vm.switchView
	    }
	  }), _c('div', {
	    ref: "options",
	    staticClass: ["options"]
	  }, _vm._l((_vm.status), function(s) {
	    return _c('div', {
	      staticClass: ["cell"],
	      on: {
	        "click": function($event) {
	          _vm.onItemClick('id')
	        }
	      }
	    }, [_c('text', {
	      class: ['name', _vm.id == _vm.statusId ? 'current' : '']
	    }, [_vm._v(_vm._s(s.name))]), (_vm.id == _vm.statusId) ? _c('image', {
	      staticClass: ["icon-curr-flag"],
	      attrs: {
	        "src": _vm.flagSrc
	      }
	    }) : _vm._e()])
	  })), _c('div', {
	    staticClass: ["select"],
	    on: {
	      "click": _vm.switchView
	    }
	  }, [_c('text', {
	    staticClass: ["current-text"]
	  }, [_vm._v(_vm._s(_vm.statusName))]), _c('image', {
	    ref: "arrow",
	    staticClass: ["icon-arrow"],
	    attrs: {
	      "src": _vm.arrowSrc
	    }
	  })])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('text', {
	    staticClass: ["button"],
	    on: {
	      "click": _vm.callNative
	    }
	  }, [_vm._v("callNative2")]), _c('child'), _c('SwitchBar', {
	    staticClass: ["dropdown"],
	    attrs: {
	      "statusId": _vm.status
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);