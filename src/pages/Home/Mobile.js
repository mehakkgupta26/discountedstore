import {
  AppleFilled,
  AppleOutlined,
  CaretDownFilled,
  GoogleCircleFilled,
  GooglePlusCircleFilled,
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

const MobilePhone = () => {
  return (
    <div>
      <div className="flex flex-wrap flex-col md:flex-row mx-2 md:mx-5 my-7 md:my-9  justify-center md:justify-evenly">
        {/* text to download mobile */}
        <div className=" m-2 p-4 md:m-1 md:p-5 flex flex-col flex-wrap justify-center items-center gap-2 md:gap-4  ">
          {/* heading */}
          <div className="flex flex-col flex-wrap justify-center items-center font-bold gap-2 md:gap-5 ">
            <h1 className=" text-lg md:text-3xl font-extrabold text-center">
              DOWNLOAD THE APP &
            </h1>
            <h1 className=" text-lg md:text-3xl font-extrabold">
              GET THE VOUCHER !
            </h1>
          </div>
          {/* text */}
          <div className=" flex flex-wrap flex-col justify-center items-center text-[10px] md:text-lg font-semibold opacity-75">
            <p>Get additional 30% off on first transaction</p>
          </div>
          {/* button */}
          <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center ">
            {/* button 1 */}
            <button className="flex flex-wrap flex-col justify-center items-center bg-black text-white cursor-pointer p-1 text-sm my-1 mx-1">
              <div className=" flex flex-wrap justify-center items-center">
                {/* icon */}
                <div className="p-1">
                  {" "}
                  <AppleFilled />
                </div>

                {/* text */}
                <div className="mx-1">
                  <p>download on the</p>
                  <p>APP STORE</p>
                </div>
              </div>
            </button>
            {/* button 2 */}
            <button className="flex flex-wrap flex-col justify-center items-center bg-black text-white cursor-pointer p-1 text-sm my-1 mx-1">
              <div className=" flex flex-wrap justify-center items-center">
                {/* icon */}
                <div className="p-1">
                  {" "}
                  <GoogleCircleFilled />
                </div>

                {/* text */}
                <div className="mx-1">
                  <p>download on the</p>
                  <p>GOOGLE PLAY</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* bubbles and mobile phone */}
        <div className=" flex flex-wrap justify-center md:space-x-9">
          {/* bubbles */}
          <div className=" flex flex-col justify-between animate-pulse">
            <div className=" bg-gray-800 rounded-full w-3 h-3"></div>
            <div className=" bg-blue-700 rounded-full w-7 h-7"></div>
          </div>

          {/* mobile phone image */}
          {/* main contaner to align */}
          <div className="flex flex-wrap justify-center m-1">
            {/* grey container */}
            <div className=" p-2 bg-black flex justify-center w-52 rounded-2xl">
              {/* white container */}
              <div className=" bg-white w-48  rounded-2xl p-3">
                {/* camera */}
                <div className=" flex flex-wrap justify-center mb-2 items-center">
                  <div className=" bg-gray-600  h-[10px] w-3/4 rounded-lg flex flex-wrap justify-center items-center ">
                    <div className=" bg-white w-[7px] h-[5px] rounded-full flex flex-wrap justify-center items-center ">
                      <div className=" bg-gray-400 w-1 h-[2px] rounded-full "></div>
                    </div>
                  </div>
                </div>

                {/* header */}
                <div className="flex flex-wrap m-1 justify-between bg-blue-50">
                  <div>
                    {/* icon1 */}
                    <MenuOutlined />
                  </div>
                  <div>
                    {/* icon2 */}
                    <UserAddOutlined />
                  </div>
                </div>

                {/* heading */}
                <div className=" font-semibold text-center text-[13px] mb-2">
                  Prices like never{" "}
                  <span className=" text-red-600"> BEFORE</span>{" "}
                </div>

                {/* search bar */}
                <div>
                  <div className=" bg-slate-100  text-[9px] flex flex-wrap space-x-2 items-center">
                    <SearchOutlined />
                    <div>search</div>
                  </div>
                </div>

                {/* top rated */}
                <div className="flex flex-wrap justify-evenly text-[9px] my-2">
                  <div className=" bg-blue-200 rounded-md px-2 py-1">
                    {" "}
                    50% OFF
                  </div>
                  <div className=" bg-slate-200 rounded-md px-2 py-1 text-center">
                    60% OFF
                  </div>
                  <div className=" bg-slate-200 rounded-md px-2 py-1 text-center">
                    New
                  </div>
                </div>

                {/* 4 cards */}
                <div className="mt-1 flex flex-col flex-wrap justify-center space-y-2">
                  <div className="flex flex-wrap justify-between m-1 ">
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img1 phone"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_4._SY232_CB600489960_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 1
                            </p>
                            <p className="text-[8px] opacity-60">Rs 180 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img 2"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_3._SY232_CB600489960_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 2
                            </p>
                            <p className="text-[8px] opacity-60">Rs 100 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between m-1">
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img3"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/HI/SYED/ATF/QC-adapts_376x232_7._SY232_CB600489960_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 3
                            </p>
                            <p className="text-[8px] opacity-60">Rs 80 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img 4 phone"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF_4-372-232._SY232_CB636110853_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 4
                            </p>
                            <p className="text-[8px] opacity-60">Rs 200 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-between m-1">
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img5"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare2x._SY232_CB410830552_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 5
                            </p>
                            <p className="text-[8px] opacity-60">Rs 500 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" w-2/5">
                      <img
                        className=" rounded-sm"
                        alt="img6"
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/372x232_Home_lighting_2._SY232_CB584596691_.jpg"
                      ></img>
                      <div className=" mt-2">
                        <div className="flex flex-wrap space-x-3 justify-between ">
                          <div className=" ">
                            <p className="text-start text-[8px] font-semibold">
                              Item 6
                            </p>
                            <p className="text-[8px] opacity-60">Rs 150 </p>
                          </div>
                          <div>
                            <p className=" text-[10px]">→</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* footer */}
                <div className="mt-3 mb-0">
                  <div className="  flex flex-wrap justify-around p-1">
                    <div>
                      <HomeOutlined />
                    </div>
                    <div>
                      {" "}
                      <MenuOutlined />
                    </div>
                    <div>
                      {" "}
                      <CaretDownFilled />{" "}
                    </div>
                    <div>
                      {" "}
                      <UserOutlined />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-col justify-between animate-pulse ">
            <div className=" bg-blue-800 rounded-full w-7 h-7  "></div>
            <div className=" bg-gray-700 rounded-full w-5 h-5 mb-28"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
