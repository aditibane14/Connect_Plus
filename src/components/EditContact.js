import React from "react";
import { useLocation } from "react-router-dom";

import { WithRouter } from "./WithRouter";

class EditContact extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    const { id, name, email, phone, address } = {};
    console.log(props.location);
    this.state = {
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.address === ""
    ) {
      alert("All fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    //console.log(this.state);
    this.setState({ name: "", email: "", phone: "", address: "" });
    //console.log(this.props);
    this.props.navigate("/");
  };
  render() {
    return (
      <div className="ui main w-50 mx-auto">
        <h2 className="p-3">Update Contact</h2>
        <form className="ui form" onSubmit={this.update}>
          <div className="input-group mb-2">
            <span className="input-group-text">Name</span>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Email</span>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Phone</span>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Phone"
              value={this.state.phone}
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
          </div>
          <div className="input-group mb-2">
            <span className="input-group-text">Address</span>
            <input
              className="form-control"
              type="text"
              name="email"
              placeholder="Address"
              value={this.state.address}
              onChange={(e) => this.setState({ address: e.target.value })}
            />
          </div>
          <button className="btn btn-primary btn-lg ">Add</button>
        </form>
      </div>
    );
  }
}

export default WithRouter(EditContact);
