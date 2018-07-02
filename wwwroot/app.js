"use strict"

var ReactDemo = React.createClass({
  render: function () {
    console.log('render ReactDemo component');
    return (
      <div>
       <h1>Hello React World!</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <ReactDemo />,
  document.getElementById('app')
);
