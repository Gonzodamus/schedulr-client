import React from "react";
import LoginForm from "../components/LoginForm";
import api from "../services/api";

class LoginFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
    error: false
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    api.auth.login(this.state.email, this.state.password).then(res => {
      if (res.error) {
        this.setState({ error: true });
      } else {
        this.props.handleLogin(res);
        this.props.history.push("/");
      }
    });
  };

  render() {
    return (
      <LoginForm
        email={this.state.email}
        password={this.state.password}
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default LoginFormContainer;