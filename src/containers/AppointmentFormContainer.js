import React from "react";
import AppointmentForm from "../components/AppointmentForm";

class AppointmentFormContainer extends React.Component {
  state = {
    name: "",
    duration: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createAppointment(this.state);
  };

  render() {
    return (
      <div class="ui raised segment" style={{ backgroundColor: "#404E5C" }}>
        <a onClick={this.props.handleClose} class="ui right corner label">
          <i onClick={this.props.handleClose} class="delete icon" />
        </a>
        <AppointmentForm
          name={this.state.name}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AppointmentFormContainer;
