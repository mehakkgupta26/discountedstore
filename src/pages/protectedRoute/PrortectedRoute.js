import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../utils/authcontext";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  //const { isLoggedIn } = useContext(AuthContext);

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn)
  useEffect(() => {
    if (isLoggedIn) {
      setAuthenticated(true);
    }
     else {
      navigate("/Signup");
    }
  }, [isLoggedIn, navigate]);
 

  return authenticated ? <Component /> : null;
};

export default ProtectedRoute;
