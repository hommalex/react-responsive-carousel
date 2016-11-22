"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Acomponent = function (_React$Component) {
	_inherits(Acomponent, _React$Component);

	function Acomponent() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Acomponent);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Acomponent.__proto__ || Object.getPrototypeOf(Acomponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = { colors: ["F65342", "F69A42", "2B8697", "32BA50"], classs: [], currentSlice: 0, interval: '' }, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Acomponent, [{
		key: "componentWillMount",
		value: function componentWillMount() {
			this.state.classs.push("active");
			this.setState({ interval: setInterval(this.moveleft.bind(this), 2000) });
		}
	}, {
		key: "moveleft",
		value: function moveleft() {
			var currentSlice = this.state.currentSlice;
			var nextSlice = this.state.currentSlice == this.state.colors.length - 1 ? 0 : this.state.currentSlice + 1;
			var newClass = [];
			newClass[currentSlice] = "removeImgLeft";
			newClass[nextSlice] = "addImgLeft";
			this.setState({ classs: newClass, currentSlice: nextSlice });
		}
	}, {
		key: "moveright",
		value: function moveright() {
			var currentSlice = this.state.currentSlice;
			var nextSlice = this.state.currentSlice == 0 ? this.state.colors.length - 1 : this.state.currentSlice - 1;
			var newClass = [];
			newClass[currentSlice] = "removeImgRight";
			newClass[nextSlice] = "addImgRight";
			this.setState({ classs: newClass, currentSlice: nextSlice });
		}
	}, {
		key: "clickleft",
		value: function clickleft() {
			clearInterval(this.state.interval);
			this.moveright();
		}
	}, {
		key: "clickright",
		value: function clickright() {
			clearInterval(this.state.interval);
			this.moveleft();
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			return React.createElement(
				"div",
				null,
				React.createElement(
					"div",
					{ className: "carousel" },
					React.createElement(
						"div",
						{ className: "directions" },
						React.createElement(
							"a",
							{ href: "#", className: "left", onClick: this.clickleft.bind(this) },
							" ",
							React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/user-interface-6/100/ui-16-128.png", alt: "" }),
							" "
						),
						React.createElement(
							"a",
							{ href: "#", className: "right", onClick: this.clickright.bind(this) },
							" ",
							React.createElement("img", { src: "https://cdn0.iconfinder.com/data/icons/user-interface-6/100/ui-16-128.png", alt: "" }),
							" "
						)
					),
					React.createElement(
						"div",
						{ className: "imgs" },
						this.state.colors.map(function (color, index) {
							return React.createElement("img", { className: "img " + _this2.state.classs[index], src: "https://dummyimage.com/550x350/" + color + "/", alt: "img" });
						})
					)
				),
				"lorem"
			);
		}
	}]);

	return Acomponent;
}(React.Component);

;

ReactDOM.render(React.createElement(Acomponent, null), document.getElementById('root'));