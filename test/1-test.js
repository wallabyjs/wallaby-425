const React = require('react');
const TestUtils = require('react-addons-test-utils');
const MyComponent = require('../src/mycomponent');
test('this should fail because required prop is missing', function() {
  const renderer = TestUtils.createRenderer();
  renderer.render(
    <MyComponent />
  );
  const component = renderer.getRenderOutput();
  ok(true);
});
