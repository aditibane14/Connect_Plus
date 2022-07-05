import React from "react";
import user from "../images/user.png";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import { WithRouter } from "./WithRouter";

const ContactCard = (props) => {
  const { id, name, email, phone, address } = props.contact;
  console.log(props.contact);
  let navigate = useNavigate();

  return (
    <div className="card p-3 m-3 " width="100px">
      <div className="row m-1">
        <div
          className="col-md-auto"
          style={{ cursor: "pointer" }}
          onClick={() => {
            console.log(props.contact);
            navigate(`/contact/${id}`, {
              state: {
                contact: props.contact,
              },
            });
          }}
        >
          {" "}
          <img className="img" src={user} alt="user" width="80px" />
        </div>

        <div className="col ps-4">
          <h2 className="row">{name}</h2>
          <div className="row">{email}</div>
        </div>
        <div className="col-md-auto">
          <i
            style={{ cursor: "pointer" }}
            className="bi bi-pencil-square"
            onClick={() => {
              console.log(props.contact);
              navigate(`/edit`, {
                state: {
                  contact: props.contact,
                },
              });
            }}
          ></i>
        </div>
        <div className="col-md-auto">
          <i
            style={{ cursor: "pointer" }}
            className="bi bi-trash-fill"
            onClick={() => props.clickHandler(id)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default WithRouter(ContactCard);
