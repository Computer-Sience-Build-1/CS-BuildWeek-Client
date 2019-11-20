import React, { Component } from "react";
import Directions from "../Directions/Directions"

export default class Game extends Component {
    state = {
    uuid: "",
    name: "",
    title: "",
    description: "",
    players: [],
    notifications: "",
    error_msg: "",
    moveDirection: ""
  };

  // Direction should be it's own component
  // Moving is a database call I believe 
  handleMove = direction => {
    console.log("MOVEMENT", direction);
  }

  // we need to initialize the user character into the game
  initializeGame = () => {

  }

  componentDidMount() {
    this.initializeGame();
  }

render () {
    return (
      <div>
        GAME COMPONENT
        <Directions handleMove={this.handleMove} />
      </div>
    );
}
}