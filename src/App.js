import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchKey: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => this.setState({ monsters: users }))
    );
  }
  handleChange = (e) => {
    this.setState({ searchKey: e.target.value }, () =>
      console.log(this.state.searchKey)
    );
  };

  render() {
    const { monsters, searchKey } = this.state;
    const filterList = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchKey.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search"
          value={this.state.searchKey}
          handleChange={this.handleChange}
        />
        <CardList monsters={filterList} />
      </div>
    );
  }
}

export default App;
