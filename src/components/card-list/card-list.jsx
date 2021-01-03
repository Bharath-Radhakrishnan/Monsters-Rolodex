import React, { Component } from "react";
import "./card-list.css";
import Card from "../card/card";
class CardList extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="card-list">
        {this.props.monsters.map((monster) => (
          <Card monster={monster} />
        ))}
      </div>
    );
  }
}
export default CardList;
