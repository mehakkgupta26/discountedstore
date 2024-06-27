import { useDispatch, useSelector } from "react-redux";
import { ClearCart } from "../../Store.js/cartSlice";
import { removeItem } from "../../Store.js/cartSlice";
import { Button } from "antd";
import { DeleteFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(ClearCart());
  };

  const handleDeleteItem = () => {
    dispatch(removeItem());
  };
  
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex-1 w-screen container mx-auto mt-10 flex flex-wrap items-center  flex-col ">
     {
      cartItems.length != 0 && 
      <>
    <h1 className="text-lg md:text-2xl font-semibold mb-5 text-blue-900 capitalize  border-blue-900 pb-2 hover:animate-bounce">Cart</h1>


      <Button className="mb-5 bg-green-600" onClick={handleClearCart}>
      Clear Cart
    </Button>
      </> 
     }

      {cartItems.length === 0 && 
      <div className="text-center mb-5 ">
        <h3 className="md:text-lg font-semibold text-blue-600">YOUR CART IS EMPTY</h3>
        <p className="text-sm text-blue-700">Keep shopping to avail amazing discounts</p>
        <Link to= "/discount">
          <h2 className="font-semibold my-5 bg-blue-200 rounded-md py-2 text-[23px] hover:bg-blue-400 hover:text-[30px] hover:shadow-xl hover:rounded-lg hover:text-white">EXPLORE NOW</h2>
        </Link>
      </div>}

      <ul className=" shadow-xl w-full text-sm md:text-md">
        {cartItems.map((product) => (
          <li key={product.id} className="flex justify-between items-center  py-2 mx-4 border-b">
            <span className="flex-1 font-semibold">{product.title}</span>
            <span className=" flex-1">${product.price}</span>
            <DeleteFilled className="text-red-500 cursor-pointer" onClick={handleDeleteItem}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
