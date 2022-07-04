import { useLocation } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = ({ id, email, name, phone, address }) => {
  console.log(id);
  console.log(email);
  const location = useLocation();
  console.log(location.state.contact.name);
  return (
    <div className="container w-50">
      <div className="card p-4 m-3">
        <div className="col">
          <div className="row p-4 d-flex align-items-center flex-column ">
            <img className="img w-25" src={user} alt="user" />
          </div>
          <h2 className="row p-4 d-flex align-items-center flex-column">
            {location.state.contact.name}
          </h2>
          <div>
              Name : {location.state.contact.name}
          </div>
          <div>
              Email : {location.state.contact.email}
          </div>
          <div>
              Phone : {location.state.contact.phone}
          </div>
          <div>
              Address : {location.state.contact.address}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
