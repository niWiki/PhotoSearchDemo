"use strict"

var ReactDemo = React.createClass({
  render: function () {
    console.log('render ReactDemo component');
    return (
      <div>
        <TitleBox
          title={this.titleText}
        />
        <SearchBox
          text={this.btnText}
          clickHandler={this.handleBtnClick}
          updateValueHandler={this.updateInputValue}
          tag={this.tag}
        />
        <SearchResult
          images={this.state.images}
          emptyText={this.state.emptyText}
        />
      </div>
    );
  },
  // This method is only called one time, which is before the initial render.
  // At this point, props and initial state are defined.
  componentWillMount: function () {
    this.titleText = 'Search for imageS';
    this.btnText = 'Search';
  },
  handleBtnClick: function () {
    if (!this.state.tag) {
      this.setState({
        images: [],
        emptyText: 'Please specify search query'
      });
    } else {
      // Use ASP.NET MVC Core to get images data
      fetch('/api/photos/'+ this.state.tag)
        .then(results => results.json())
        .then(data => {
          this.setState({
            images: data.result,
            emptyText: data.result.lenght > 0 ? '' : 'There are no images matching your search :(',
            tag: ''
          });
        });
    }
  },
  // Enables to set the initial state value, that is accessible inside the component via this.state.
  getInitialState: function () {
    return {
      images: [],
      tag: '',
      emptyText: 'Currently there are no images to show :)'
    }
  },
  updateInputValue: function (evt) {
    this.setState({
      tag: evt.target.value
    });
  }
});

var TitleBox = React.createClass({
  render: function () {
    console.log('render TitleBox component');
    return (
      <h1>{this.props.title}</h1>
    );
  }
});

var SearchBox = React.createClass({
  render: function () {
    console.log('render SearchBox component');
    return (
      <div>
        <input value={this.props.tag} onChange={this.props.updateValueHandler} />
        <button
          onClick={this.props.clickHandler}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
});

var SearchResult = React.createClass({
  render: function () {
    console.log('render SearchResult component');
    if (!this.props.images || this.props.images.length == 0) {
      return (
        <p>{this.props.emptyText}</p>
      );
    }
    const listItems = this.props.images.map((image) =>
      <li key={image.id}>
        <img src={image.url}></img>
        <p>{image.description}</p>
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
});

ReactDOM.render(
  <ReactDemo />,
  document.getElementById('app')
);