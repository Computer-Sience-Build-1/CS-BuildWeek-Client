import React, { Component } from "react";
import Directions from "../Directions/Directions"
import config from "../../Config/index"

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
    config
      .axiosWithAuth()
      .post("/api/adv/move/", { direction })
      .then(({ data: { title, description, players, error_msg } }) => {
        error_msg
          ? this.setState({
              title,
              description,
              players: [...players],
              error_msg,
              moveDirection: ""
            })
          : this.setState({
              title,
              description,
              players: [...players],
              error_msg,
              moveDirection: direction
            });
      })
      .catch(err => console.log(err));
  }

  // we need to initialize the user character into the game
  initializeGame = () => {
    config
      .axiosWithAuth()
      .get(`/api/adv/init/`)
      .then(({ data: { uuid, name, title, description, players } }) => {
        this.setState({
          uuid,
          name,
          title,
          description,
          players
        });        
      })
      .catch(err => {
        console.log(err);
      });
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