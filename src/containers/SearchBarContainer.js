import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';




/* 컴포넌트 클래스 생성 */
class SearchBarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      "Most Reviewed": 'review_count'
    };
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }


  getSortByClass(sortByOption) {
    if(this.state.sortBy === sortByOption) { return 'active'; }
    return '';
  }

  handleSortByChange(sortByOptionValue) {
    this.setState({sortBy: sortByOptionValue});
  }

  handleTermChange(e) {
    this.setState({ term: e.target.value });
  }
  handleLocationChange(e) {
    this.setState({ location: e.target.value });
  }

  handleSearch(e) {
    // api 실행
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }


  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li key={sortByOption}
      className={this.getSortByClass(sortByOptionValue)}
      onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
        {sortByOptionValue}
      </li>;
    });
  }



  render() {
    return (
    <SearchBar 
    renderSortByOptions={this.renderSortByOptions()} 
    handleTermChange={this.handleTermChange} 
    handleLocationChange={this.handleLocationChange}   
    handleSearch={this.handleSearch} />
    );
  }
};






export default SearchBarContainer;