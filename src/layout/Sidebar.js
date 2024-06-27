import {
  OrderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {  Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../Store.js/AuthSlice";
// import { AuthContext } from "../utils/authcontext";
// import { useContext } from "react";
const SideNavigation = () => {

  // const { logout, isLoggedIn} = useContext(AuthContext);
const dispatch = useDispatch();
const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  const navigate = useNavigate();


  const handleLogout = () => {
    // Remove user data from local storage
    localStorage.removeItem("signup");
dispatch(logout());
    navigate("/Signup")
  };

  return (
    <div className=" flex flex-wrap flex-col items-center justify-center mb-4">
      <div>
        <p>
          {isLoggedIn ? ( // Show logout button if user is logged in
            <button className="login-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            // Show login button if user is not logged in
            <Link to="/Signup" >
              <button >Login</button>
            </Link>
          )}
        </p>
      </div>
      <Menu
        className="md:h-screen "
        style={{ border: "none" }}
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: "Contact Us",
            icon: <UserOutlined />,
            key: "/contact-us",
          },

          {
            label: "My Orders",
            icon: <OrderedListOutlined />,
            key: "/order",
          },
        ]}
      ></Menu>
    </div>
  );
};
export default SideNavigation;
