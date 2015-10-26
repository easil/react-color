'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactCSS = require('reactcss');
var color = require('../../helpers/color');

var _require = require('../common');

var EditableInput = _require.EditableInput;

var ShetchFields = function (_ReactCSS$Component) {
  _inherits(ShetchFields, _ReactCSS$Component);

  function ShetchFields() {
    _classCallCheck(this, ShetchFields);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ShetchFields).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(ShetchFields, [{
    key: 'classes',
    value: function classes() {
      return {
        'default': {
          fields: {
            display: 'flex',
            paddingTop: '4px'
          },
          single: {
            flex: '1',
            paddingLeft: '6px'
          },
          double: {
            flex: '2'
          },
          Input: {
            style: {
              input: {
                width: '80%',
                padding: '4px 10% 3px',
                border: 'none',
                boxShadow: 'inset 0 0 0 1px #ccc',
                fontSize: '14px',
                textAlign: 'center',
                fontWeight: 'bold'
              },
              label: {
                display: 'block',
                textAlign: 'center',
                fontSize: '11px',
                color: '#222',
                paddingTop: '3px',
                paddingBottom: '4px',
                textTransform: 'capitalize'
              }
            }
          }
        }
      };
    }
  }, {
    key: 'handleChange',
    value: function handleChange(data) {
      if (data.hex) {
        color.isValidHex(data.hex) && this.props.onChange(data.hex);
      } else if (data.r || data.g || data.b) {
        this.props.onChange({
          r: data.r || this.props.rgb.r,
          g: data.g || this.props.rgb.g,
          b: data.b || this.props.rgb.b,
          a: this.props.rgb.a
        });
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 100) {
          data.a = 100;
        }

        data.a = data.a / 100;
        this.props.onChange({
          h: this.props.hsl.h,
          s: this.props.hsl.s,
          l: this.props.hsl.l,
          a: data.a
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { style: this.styles().fields, className: 'flexbox-fix' },
        React.createElement(
          'div',
          { style: this.styles().double },
          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'hex', value: this.props.hex.replace('#', ''), onChange: this.handleChange }))
        ),
        React.createElement(
          'div',
          { style: this.styles().single },
          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'r', value: this.props.rgb.r, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        ),
        React.createElement(
          'div',
          { style: this.styles().single },
          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'g', value: this.props.rgb.g, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        ),
        React.createElement(
          'div',
          { style: this.styles().single },
          React.createElement(EditableInput, _extends({}, this.styles().Input, { label: 'b', value: this.props.rgb.b, onChange: this.handleChange, dragLabel: 'true', dragMax: '255' }))
        )
      );
    }
  }]);

  return ShetchFields;
}(ReactCSS.Component);

module.exports = ShetchFields;