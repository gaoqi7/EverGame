import React, { Component } from 'react';
import API from './util/API';


class App extends Component {

  state = { query: '' }
  handleInputChange = event => {
    this.setState({ query: event.target.value });
    API.search("final");

  }




  render() {
    return (
      <form>
        <input style={{ border: "blue 2px solid" }}
          type="text"
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleInputChange}

        />
      </form>
    );

  }
}

export default App;
