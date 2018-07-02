"use strict"

var ReactDemo = React.createClass({
  render: function () {
    console.log('render ReactDemo component');
    return (
      <div>
        <TitleBox
          title={this.titleText}
        />
      </div>
    );
  },
  // This method is only called one time, which is before the initial render.
  // At this point, props and initial state are defined.
  componentWillMount: function () {
    this.titleText = 'Search for imageS';
  },
});

var TitleBox = React.createClass({
  render: function () {
    console.log('render TitleBox component');
    return (
      <h1>{this.props.title}</h1>
    );
  }
});

ReactDOM.render(
  <ReactDemo />,
  document.getElementById('app')
);