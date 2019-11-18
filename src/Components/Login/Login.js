import React, { Component } from "react";
import axios from "axios";

/**
 * Login Component allows user to login to their existing account
 * Sends credentials object to the API with a username and password
 * Expects from the API a response with a key, validating they are a registered user
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

  /**
   * handleInput sets user input to state, to accurately reflect their input and save for form submission
   * @param: Event, that triggers the function from user action.
   */
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  /**
   * Submits user inputs to the API endpoint to login
   * If successful, sets the user's key to localStorage. If unsuccessful, logs error.
   * @param {*} Event that triggers the function from user submitting form
   */
  handleSubmit = e => {
    e.preventDefault();
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      // TODO: Can add a loading spinner for improved UI
      loading: true
    });

    axios
      .post("https://lambda-mud-test.herokuapp.com/api/login", credentials)
      .then(res => {
        // SET KEY TO localStorage?
        // Verify return format of res {key: 12345}
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
        // TODO: Find out expected errors and format
      });
  };

  render() {
    return (
      <Body>
        <Background>
          <Form onSubmit={this.handleSubmit}>
            <FormHeader>Lambda MUD</FormHeader>
            <FormLabel name="username">
              <FormInput
                onChange={this.handleInput}
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.username}
              />
            </FormLabel>

            <FormLabel name="password">
              <FormInput
                onChange={this.handleInput}
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.password}
              />
            </FormLabel>

            <FormSubmit type="submit" disabled={!this.state.password}>
              Login
            </FormSubmit>
            <Link to="/register">
              <FormText>Not yet registered?</FormText>
            </Link>
          </Form>
        </Background>
      </Body>
    );
  }
}

export default Login;
