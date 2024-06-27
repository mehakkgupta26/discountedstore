import { Link } from "react-router-dom";
import MobilePhone from "./Mobile";

const Home = () => {
  return (

    <div className="mt-2 w-full">
    {/* grey container */}
    <div className=" mx:3 flex justify-center">
      <div
        className=" p-3 rounded-md lg:rounded-3xl w-4/5  bg-[#E8E8E8] 
  flex flex-wrap flex-col-reverse justify-center items-center md:flex-row md:space-x-3 md:justify-evenly "
      >
        <div className="flex flex-col flex-wrap mt-5 items-center md:items-start gap-1 md:text-2xl lg:text-4xl md:gap-2 lg:gap-4 ">
          {/* <p className="bg-white text-center font-bold md:text-left w-[100px] lg:w-[200px]">
            LET'S{" "}
          </p> */}
          <p className="font-bold ">EXPLORE</p>
          <p className=" bg-blue-200 text-center font-bold md:text-left w-[100px] lg:w-[200px]">
            {" "}
            UNIQUE{" "}
          </p>
          <p className="font-bold ">PRICES.</p>
        
        </div>
        <div className="">
          <img
            className="h-30 md:h-50 lg:h-[204px] w-60 md:w-92 lg:w-[380px]"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-372-232._SY232_CB636110853_.jpg"
            alt="model 3"
          ></img>
        </div>
      </div>
    </div>

    {/* logo craousal */}
    <div className="w-full bg-blue-200 p-2 md:p-4 my-2 md:my-6 flex flex-wrap justify-evenly items-center " > 
    <div>
      <img className=" w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo1" src="https://1000logos.net/wp-content/uploads/2017/06/Samsung-logo.jpg" />
    </div>
    <div>
      <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12"alt="logo2" src="https://1000logos.net/wp-content/uploads/2017/08/Obey-Logo.png" />
    </div>
    <div>
      <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo3" src="https://1000logos.net/wp-content/uploads/2020/08/Shopify-Logo.png" />
    </div>
    <div>
      <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo4" src="https://1000logos.net/wp-content/uploads/2021/05/Lacoste-logo.png" />
    </div>
    <div>
      <img className="w-5 h-5 md:w-10 md:h-10 lg:w-12 lg:h-12" alt="logo5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Levi%27s_logo.svg/2560px-Levi%27s_logo.svg.png" />
    </div>
    <div>
      <img className="w-6 h-6 md:w-12 md:h-12 lg:w-14 lg:h-14" alt="logo6" src="https://logos-world.net/wp-content/uploads/2022/12/Whirlpool-Logo.png" />
    </div>
    </div>

    {/* new arrivals */}
    <div className="mx-2 my-1 mt-6  ">
      <Link to= "/discount">
      <h2 className="mx-3 font-bold text-xl md:text-2xl lg:text-3xl text-center my-3">
      Up to 75% off | Headphones
      </h2>
      </Link>
      
    </div>

    {/* list of arrivals */}
    <div className="mx-2 mt-3 flex flex-wrap justify-evenly items-center ">
      <div className="flex flex-wrap justify-center md:justify-evenly items-center m-3">
        <div className="my-2 mx-1 md:mx-3">
          <div>
            <img
              className="w-48 md:w-48 h-45 md: rounded-lg"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boat_Desktop_Qc_2x._SY232_CB577919562_.jpg"
              alt="boat"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-2">
              <h3>BOAT</h3>
            </div>
      
        </div>
        <div className="my-2 mx-1 md:mx-3">
          <div>
            <img
                className="w-48 md:w-48 h-45 md:h- rounded-lg"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Boult_Desktop_Qc_2x._SY232_CB577919562_.jpg"
              alt="boult"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-2">
              <h3>BOULT</h3>
            </div>
        </div>
        <div className="my-2 mx-1 md:mx-3">
          <div>
            <img
                className="w-48 md:w-48 h-45 md:h- rounded-lg"
              alt="brand 3"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MSO/CE/Unrec1/Noise_Desktop_Qc_2x._SY232_CB577919562_.jpg"
            />
          </div>
          <div className="flex flex-wrap justify-center mt-2">
              <h3>NOISE</h3>
            </div>
        </div>
      </div>
    </div>

    {/* Blue container */}
    <div className=" my-2 bg-blue-200 flex flex-wrap flex-col justify-center items-center md:flex-row md:space-x-2 md:justify-evenly  ">
      <div className=" md:h-96 md:w-96 h-48 w-48 flex flex-wrap items-center">
        <img
          className=" rounded-lg"
          alt="Min. 60% off | Outdoor lights"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/2024/PCCC/Pc-748_X_608-2-min._SY608_CB582865207_.jpg"
        ></img>
      </div>
      <div className="flex flex-col flex-wrap mt-3 items-center md:items-start gap-1 md:text-2xl lg:text-3xl md:gap-2 ">
        <p className="bg-white text-center font-bold md:text-left w-[100px] lg:w-[220px] ">
         PAYDAY
        </p>
        <p className="font-bold ">SALE NOW</p>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-[10px] md:text-md lg:text-lg text-center mt-1 md:mt-2 lg:mt-3 ">
            Spend minimal $100 & get 30% off voucher code for your next purchase
          </p>
          <p className=" font-bold text-[10px] md:text-md  lg:text-lg text-center mt-1 lg:mt-2">
            1 April- 10 April 2024
          </p>
          <p className="text-[10px] md:text-md lg:text-lg text-center">
            *Terms & Conditions apply
          </p>
          <div className="bg-black rounded-md text-white w-6/12 md:w-3/12 p-2 text-[12px] cursor-pointer my-3 md:mt-5 lg:mt-9 text-center">
          <Link to= "/discount"> 
          <button >
         SHOP NOW 
          </button>
          </Link>
          </div>
         
        </div>
      </div>
    </div>

    {/* Appliances for your home */}
    <div className="mx-2 my-1 mt-9 mb-8  ">
      <h2 className="mx-3 font-bold text-xl md:text-2xl lg:text-3xl text-center my-3">
      Appliances for your home | Upto 50% OFF
      </h2>
    </div>

    {/* Appliances for your home */}
    <div className="mx-2 mt-3">
      <div className="flex flex-wrap justify-evenly items-center p-4 md:gap-x-3">
      <div className=" flex flex-col items-center justify-center flex-wrap">
        <img className=" h-40 w-56 md:h-auto md:w-auto"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg"></img>
        <p> Air Conditioners </p>
      </div>
      <div className=" flex flex-col items-center justify-center flex-wrap">
        <img className=" h-40 w-56 md:h-auto md:w-auto"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg"></img>
        <p> Refrigerators</p>
      </div>
      <div className=" flex flex-col items-center justify-center flex-wrap">
        <img className=" h-40 w-56 md:h-auto md:w-auto"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg"></img>
        <p> Washing Machines </p>
      </div>
      </div>
      <div className=" text-center my-5 font-bold">
       <Link to="/discount">  SHOP NOW</Link>
      </div>
    </div>

    {/* download the app text and mobile */}
    {/* <MobilePhone /> */}

    {/* last search bar */}
    <div className=" bg-blue-300 flex flex-wrap flex-col justify-center items-center p-3 text-black text-center ">
      <div className=" font-semibold text-center text-lg md:text-xl mb-2">
       <h4>
        Shop with us and get discounts like never before
       </h4>
      </div>
    </div>
    <MobilePhone />
  </div>
  );
};
export default Home;
