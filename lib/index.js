"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _ItemWrapper = _interopRequireDefault(require("./ItemWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function SampleNextArrow(props) {
  var onClick = props.onClick;
  return _react.default.createElement("div", {
    className: "arrow next",
    onClick: onClick
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-right"
  }));
}

function SamplePrevArrow(props) {
  var onClick = props.onClick;
  return _react.default.createElement("div", {
    className: "arrow prev",
    onClick: onClick
  }, _react.default.createElement("span", {
    className: "glyphicon glyphicon-chevron-left"
  }));
}

var Swiper =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Swiper, _PureComponent);

  function Swiper() {
    _classCallCheck(this, Swiper);

    return _possibleConstructorReturn(this, (Swiper.__proto__ || Object.getPrototypeOf(Swiper)).apply(this, arguments));
  }

  _createClass(Swiper, [{
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      return this.props.items.map(function (item, index) {
        return _react.default.createElement(_ItemWrapper.default, {
          key: "item-".concat(index),
          component: (0, _react.createElement)(_this.props.component, _objectSpread({}, item)),
          link: item.link,
          scroll: _this.props.scroll || _this.props.items.length <= 3,
          itemsCount: _this.props.items.length
        });
      });
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      if (this.props.header) {
        return _react.default.createElement("div", {
          className: "header"
        }, _react.default.createElement("h3", {
          dangerouslySetInnerHTML: {
            __html: this.props.header
          }
        }));
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      var settings = {
        speed: 500,
        slidesToShow: this.props.items.length > 4 ? 4 : this.props.items.length,
        dots: false,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        nextArrow: _react.default.createElement(SampleNextArrow, null),
        prevArrow: _react.default.createElement(SamplePrevArrow, null),
        responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: this.props.items.length > 3 ? 3 : this.props.items.length,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 600,
          settings: {
            slidesToShow: this.props.items.length > 2 ? 2 : this.props.items.length,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
      };

      if (this.props.scroll || this.props.items.length <= 3) {
        return _react.default.createElement("section", {
          className: "react-swiper"
        }, this.renderHeader(), _react.default.createElement("div", {
          className: "swiper-container"
        }, _react.default.createElement("div", {
          className: "swiper-wrapper"
        }, this.renderItems())));
      } else {
        return _react.default.createElement("section", {
          className: "react-swiper"
        }, this.renderHeader(), _react.default.createElement(_reactSlick.default, settings, this.renderItems()));
      }
    }
  }]);

  return Swiper;
}(_react.PureComponent);

exports.default = Swiper;
Swiper.defaultProps = {
  header: null,
  withLink: true,
  scroll: false
};
Swiper.propTypes = {
  scroll: _propTypes.default.bool,
  header: _propTypes.default.string,
  withLink: _propTypes.default.bool,
  component: _propTypes.default.element.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired
};