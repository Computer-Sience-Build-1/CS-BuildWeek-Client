import React, { Component } from "react";
import axios from "axios";
import config from "../../config/index.js";
import {Input, Button} from '@material-ui/core';

import '/Register.css';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      password2: "",
      loading: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    // TODO: Verify passwords match and add type checking for password security

    const credentials = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.setState({
      loading: true
    });

    axios
      .post(`${config.apiUrl}/api/registration/`, credentials)  // URL will need updating when Django is complete
      .then(res => {
        // SET KEY TO localStorage?        
        localStorage.setItem("authToken", res.data.key);
        this.setState({
          username: "",
          password: "",
          password2: "",
          loading: false
        });
        // Route to game when component is complete and router is setup
        this.props.history.push(`/`);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div class="register-container">
        <form class="register-form">
          <Input
            onChange={this.onChange}
            name="username"
            placeholder="username..."
            value={this.state.username}
          />
          <Input
            onChange={this.onChange}
            name="password"
            placeholder="password..."
            value={this.state.password}
          />
          <Input
            onChange={this.onChange}
            name="password2"
            placeholder="confirm password..."
            value={this.state.password2}
          />
          <Button disabled={!this.state.password}  onSubmit={this.onSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

export default Register;