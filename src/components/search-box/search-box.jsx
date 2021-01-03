import React, { Component } from "react";
import "./search-box.css";

class SearchBox extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  render() {
    return (
      <input
        type="search"
        className="search"
        placeholder={this.props.placeholder}
        value={this.props.searchKey}
        onChange={this.props.handleChange}
      />
    );
  }
}

export default SearchBox;
