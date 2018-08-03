import React from "react"

export class EventForm extends React.Component {

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Event title:</label>
          <input type="text" name="title"/><br/>
          <label>Date:</label>
          <input type="text" name="date"/><br/>
          <label>Location:</label>
          <input type="pac-input" name="location" id="location-input"/><br/>
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
