import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateContact = (props) => {
  const location = useLocation();
  let navigate = useNavigate();

  console.log(location.state.contact);
  const [state, setState] = useState({
    id: location.state.contact.id,
    name: location.state.contact.name,
    email: location.state.contact.email,
    phone: location.state.contact.phone,
    address: location.state.contact.address,
  });

  const update = (e) => {
    console.log("hello");
    e.preventDefault();
    if (
      state.name === "" ||
      state.email === "" ||
      state.phone === "" ||
      state.address === ""
    ) {
      alert("All fields are mandatory!");
      return;
    }
    console.log(state);
    props.updateContactHandler(state);
    setState({ name: "", email: "", phone: "", address: "" });
    navigate("/");
  };

  return (
    <div className="ui main w-50 mx-auto">
      <h2 className="p-3">Update Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="input-group mb-2">
          <span className="input-group-text">Name</span>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              setState({
                id: state.id,
                name: e.target.value,
                email: state.email,
                phone: state.phone,
                address: state.address,
              })
            }
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text">Email</span>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              setState({
                id: state.id,
                name: state.name,
                email: e.target.value,
                phone: state.phone,
                address: state.address,
              })
            }
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text">Phone</span>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Phone"
            value={state.phone}
            onChange={(e) =>
              setState({
                id: state.id,
                name: state.name,
                email: state.email,
                address: state.address,
                phone: e.target.value,
              })
            }
          />
        </div>
        <div className="input-group mb-2">
          <span className="input-group-text">Address</span>
          <input
            className="form-control"
            type="text"
            name="email"
            placeholder="Address"
            value={state.address}
            onChange={(e) =>
              setState({
                id: state.id,
                name: state.name,
                email: state.email,
                phone: state.phone,
                address: e.target.value,
              })
            }
          />
        </div>
        <button className="btn btn-primary btn-lg ">Update Contact</button>
      </form>
    </div>
  );
};

export default UpdateContact;
