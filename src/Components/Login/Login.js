import React, { Component } from "react";
import axios from "axios";
import config from "../../Config/index.js";
import { Input, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
/**
 * Login Component allows user to login to their existing account
 * Sends credentials object to the API with a username and password
 */

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      loading: false
    };
  }

  //  * handleInput sets user input to state, to accurately reflect their input and save for form submission   
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /**
   * Submits user inputs to the API endpoint to login
   * If successful, sets the user's key to localStorage. If unsuccessful, logs error.   
   */
  handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      // Can add a loading spinner for improved UI?
      loading: true
    });

    axios
      .post(`${config.apiUrl}/api/login/`, credentials)
      .then(res => {
        // SET KEY TO localStorage?
        // Verify return format of res {key: 12345}
        console.log("AUTH KEY", res.data.key);
        localStorage.setItem("authToken", res.data.key);
        this.setState({
          username: "",
          password: "",
          loading: false
        });
        // ROUTE TO GAME
        this.props.history.push(`/`);
      })
      .catch(err => {
        console.error(err.response);        
      });
  };

  render() {
    return (
      <div class="register-container">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <Input
            className="game-input"
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
          />
          <Input
            className="game-input"
            onChange={this.handleChange}
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
          />
          <Button
            text="submit"
            disabled={!this.state.password}
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          <Link to="/register"></Link>
        </form>
      </div>
    );
  }
}

export default Login;
