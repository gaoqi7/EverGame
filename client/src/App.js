import React, { Component } from 'react';
import API from './util/API';
import List from './component/List';

class App extends Component {

  state = {
    query: '',
    apiReturn: []
  }

  fetchData = () => {
    API.search(this.state.query)
      .then(res => {
        let dataFilter = res.data.filter(el => el.release_dates[el.release_dates.length - 1].date > 1549842737)
        this.setState({ apiReturn: dataFilter });
      })
      .catch(error => { console.log(error) });
  }

  handleInputChange = event => {
    this.setState({ query: event.target.value });
    if (event.target.value.length <= 5) {
      return;
    } else {
      setTimeout(this.fetchData, 300)
    }

  }




  render() {
    return (
      <>
        <form>
          <input style={{ border: "blue 2px solid" }}
            type="text"
            placeholder="Search"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <List apiReturn={this.state.apiReturn} />
      </>
    );

  }
}

export default App;
