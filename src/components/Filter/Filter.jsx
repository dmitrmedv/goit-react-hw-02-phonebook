const { Component } = require('react');

class Filter extends Component {
  findContact = event => {
    this.props.findContact(event.target.value);
  };

  render() {
    return (
      <>
        <p>Find contacts by name</p>
        <input type="text" onChange={this.findContact} />
      </>
    );
  }
}

export default Filter;
