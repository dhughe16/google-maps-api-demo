import React from "react"

export var NavBar = function (_React$Component) {
  _inherits(NavBar, _React$Component);

export class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Event title:</label>
        <input type="text" name="title"/><br/>
        <label>Date:</label>
        <input type="pac-input" name="date"/><br/>
        <label>Location:</label>
        <input type="text" name="location" id="location-input"/><br/>
        <label height="50px">Description:</label>
        <textarea rows="4" cols="50" name="desc"></textarea><br/>
        <label>YouTube Video:</label>
        <input type="text" name="video" id="video-input"/>
        <button>Upload Video</button><br/><br/>
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
    );
  }
}
