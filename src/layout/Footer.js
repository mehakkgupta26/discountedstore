
// const Footer= () =>{
//     return (
//         <div className=" mt-4 p-4 bg-black text-white flex flex-wrap justify-center">
//             Footer
//         </div>
//     );
// }
// export default Footer;

import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className=" bg-black text-white p-4 mt-3 flex flex-wrap flex-col md:flex-row  justify-center md:justify-around">

                <div className=" flex flex-col items-center md:items-start flex-wrap gap-2 m-2 md:m-10 ">
                    <h1 className=" font-bold text-md md:text-2xl ">Store</h1>
                    <div className=" text-sm md:text-md text-center md:text-left ">
                        <p>Your everyday store</p>
                        <p>for discounted items</p>
                    </div>
                    <div className=" flex flex-row flex-wrap space-x-2 mt-2">
                        <div className=" bg-blue-300 w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <FacebookFilled />  </div>
                        <div className=" bg-blue-300  w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <InstagramFilled /> </div>
                        <div className=" bg-blue-300  w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <TwitterCircleFilled />  </div>
                        <div className=" bg-blue-300  w-7 flex flex-wrap justify-center items-center rounded-sm p-1 text-black">  <LinkedinFilled /> </div>
                    </div>
                </div >

                <div className=" flex flex-wrap flex-col md:flex-row justify-evenly md:space-x-40">
                    <div className=" m-2  mt-6 md:my-10  flex flex-col items-center md:items-start text-sm md:text-md gap-2 ">
                        <div className=" font-semibold "> Company</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                          <Link to = "/about-us"> <p>About</p> </Link> 
                          <Link to = "/contact-us">    <p>Contact us</p> </Link> 
                            <p>Support</p>
                            <p>Careers</p>
                        </div>
                    </div>

                    <div className=" m-2  mt-6 md:my-10 flex flex-col items-center md:items-start text-sm md:text-md gap-2">
                        <div className=" font-semibold "> Quick Link</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                            <p>Share Location</p>
                            <p>Orders Tracking</p>
                            <p>Size Guide</p>
                            <p>FAQs</p>
                        </div>
                    </div>

                    <div className=" m-2  mt-6 md:my-10  flex flex-col items-center md:items-start text-sm md:text-md gap-2">
                        <div className=" font-semibold "> Legal</div>
                        <div className=" opacity-70 text-center md:text-left flex flex-col flex-wrap gap-2">
                            <p>Terms & conditions </p>
                            <p>Privacy policy</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Footer;
