import React, { Component} from 'react'

class SearchBar extends Component {
  render () {
    return (
      <div className="search-bar">
        <input onChange={(e) => this.onInputChange( e.target.value)}/>
      </div>
    )
  }

  onInputChange(term) {
    this.props.onSearchTerm(term)
  }
}

export default SearchBar;