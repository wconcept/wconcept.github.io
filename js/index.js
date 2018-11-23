
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Header = function Header(props) {return (
    React.createElement("header", { className: "header" },
      React.createElement("div", { className: "header-logo" },
        React.createElement("span", null, "Events"),
        React.createElement("span", null, ""))));};



var Item = function Item(props) {return (
    React.createElement("a", { className: "list-item", id: props.id, href: props.link, target: "_blank" },
      React.createElement("div", { className: "list-item__label" }, props.label),
      React.createElement("div", { className: "list-item__location" }, props.location),
      React.createElement("div", { className: "list-item__company" }, props.company),
      React.createElement("div", { className: "list-item__title" }, props.title),
      React.createElement("div", { className: "list-item__desc" }, props.desc)));};var



List = function (_React$Component) {_inherits(List, _React$Component);function List() {_classCallCheck(this, List);return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));}_createClass(List, [{ key: "render", value: function render()
    {
      if (this.props.jobs == undefined) {
        return false;
      }
      var card = this.props.jobs.map(function (item, index) {
        var location = item.address,
        address = null,
        desc = String(item.description).substring(0, 120) + ' ...';
        if (location == null) {
          address = 'Location not specified';
        } else {
          address = location.city + ', ' + location.country;
        }
        return (
          React.createElement(Item, {
            id: index,
            link: item.url,
            label: item.term,
            location: address,
            company: item.company_name,
            title: item.title,
            desc: desc }));

      });
      return (
        React.createElement("div", { className: "list" },
          card));


    } }]);return List;}(React.Component);var


App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App(props) {_classCallCheck(this, App);var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this2.state = {};return _this2;
  }_createClass(App, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement(Header, null),
          React.createElement(List, { jobs: this.state.jobs })));


    } }, { key: "componentDidMount", value: function componentDidMount()

    {var _this3 = this;
      axios.get('https://raw.githubusercontent.com/i-experience/i-experience.github.io/master/posts.json').
      then(function (response) {
        _this3.setState({
          jobs: response.data.jobs });

        console.log(response);
      }).
      catch(function (error) {
        console.log(error);
      });
    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.querySelector('.app'));