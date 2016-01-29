const React = require('react');
const {Component, PropTypes} = React;
class MyComponent extends Component {
  render() {
    return <div />;
  }
}
MyComponent.propTypes = {
  pear: PropTypes.string.isRequired,
};
module.exports = MyComponent;
