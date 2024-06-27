import React, { useState } from "react";
import { HomeFilled,MenuFoldOutlined,MenuOutlined,ShoppingCartOutlined} from "@ant-design/icons";
import { Menu, Badge, Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.js"
const Header = () => {

const[cartDrawerOpen, setCartDrawerOpen] = useState(false)

  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" shadow-lg flex flex-wrap md:justify-between justify-center items-center h-[50px] md:h-[70px] mb-9 md:mb-3 text-md lg:text-xl md:gap-x-[50px] md:p-2 ">
     
     <div className="ml-5 md:ml-10">
        <MenuOutlined onClick={() => setCartDrawerOpen(true)} />
        <Drawer
          visible={cartDrawerOpen}
          onClose={() => setCartDrawerOpen(false)}
          placement="left"
        >
        
          <p> <Sidebar /></p>
        </Drawer>
      </div>

      <Menu
        className=" flex flex-wrap justify-center md:gap-7 items-center border-none text-md md:text-lg md:p-2 flex-auto "
        mode="horizontal"
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          {
            label: <HomeFilled style={{ fontSize: "14px" , color: "black" }} />,
            key: "/",
          },
          {
            label: "OFFERS",
            key: "/latest",
            children: [
              {
                label: "UPTO 50% OFF",
                key: "/discount",
              },
            ],
          },
          {
            label: "ABOUT US",
            key: "/about-us",
          },
        ]}
      ></Menu>

      <Link to="/cart">
        <p className=" mr-4">
          <Badge count={cartItems.length}>
            <ShoppingCartOutlined className=" text-lg md:text-2xl text-blue-900 font-bold" />{" "}
          </Badge>
        </p>
      </Link>

      <Link to="/">
      <h3 className="p-1 text-[15px] md:text-[20px] mr-3 font-bold text-blue-700">
        DISCOUNTED STORE
      </h3>
      </Link>
  
    </div>
  );
};

export default Header;
