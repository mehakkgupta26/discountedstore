import { useContext } from "react";
import Products from "../Products/Products";
import { AuthContext } from "../../utils/authcontext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  // const { isLoggedIn } = useContext(AuthContext);
  // const nav = useNavigate();
  // if (!isLoggedIn) {
  //   return nav("/Signup");
  // }
  return (
    <div className=" flex-1 mt-5">
      <Products />
    </div>
  );
};
export default Category;
