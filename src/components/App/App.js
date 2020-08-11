import React from "react";

import SearchBarContainer from "../../containers/SearchBarContainer";
import BusinessList from "../BusinessList/BusinessList";

import Yelp from "../../util/Yelp";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { businesses: [] };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, loca, sortOp) {
    Yelp.search(term, loca, sortOp).then((businesses) => {
      this.setState({ businesses: businesses });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBarContainer searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}

export default App;
