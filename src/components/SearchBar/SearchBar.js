import React from "react";
import "./SearchBar.css";

/* 컴포넌트 클래스 생성 */
class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.props.renderSortByOptions}</ul>
        </div>
        <div className="SearchBar-fields">
          <input
            onChange={this.props.handleTermChange}
            placeholder="Search Business"
          />
          <input
            onChange={this.props.handleLocationChange}
            placeholder="Where?"
          />
        </div>
        <div className="SearchBar-submit">
          {/* eslint-disable-next-line */}
          <a onClick={this.props.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
