import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Space } from "antd";
import { Outlet } from "react-router-dom";


const RootLayout = () => {
    return (
        <div className=" flex flex-col h-screen w-screen">
        <Header />
        {/* <Space className="flex flex-1 flex-col justify-start items-start md:flex-row">
          <Sidebar  />
         <Outlet/>
        </Space> */}
        <Outlet />
        <Footer />
      </div>

    );
    }
  export default RootLayout;