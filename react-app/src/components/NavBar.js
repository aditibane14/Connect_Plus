import React from "react";
import { Link , useNavigate} from "react-router-dom";

export default function NavBar() {
  let navigate = useNavigate();

  return (

    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        
        <div className="navbar-brand navbar-dark" onClick={() => {
            navigate("/");
          }} style={{cursor: 'pointer'}}>
            ConnectPlus
        </div>
        
      </div>
    </nav>
  );
}
