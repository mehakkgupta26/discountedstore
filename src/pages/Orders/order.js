import {
    MoneyCollectFilled,
    ShoppingCartOutlined,
    TrophyOutlined,
  } from "@ant-design/icons";
  import {
    AppstoreFilled,
    OrderedListOutlined,
    ShoppingOutlined,
    UserAddOutlined,
  } from "@ant-design/icons";
  import { Card, Space, Statistic, Table, Typography } from "antd";



const Order = () =>{

    const Dashboardcard = ({ title, value, icon }) => {
        return (
          <Card size=" large">
            <Space direction="horizontal">
              {icon}
              <Statistic title={title} value={value}></Statistic>
            </Space>
          </Card>
        );
      };

    return (
        <div className="flex-1 flex items-center flex-wrap flex-col mt-10 gap-3 mx-9 mb-10">
                 <Typography.Title level={5}>My Order History</Typography.Title>
      <Space direction="vertical" size={50}>
        <div direction="horizontal" className=" flex flex-wrap justify-center items-center">
          <Dashboardcard
            icon={
              <OrderedListOutlined className=" text-green-800 bg-green-200 rounded-md p-1" />
            }
            title={"Orders"}
            value={12}
          />
          <Dashboardcard
            icon={
              <ShoppingOutlined className=" text-purple-400 bg-purple-200 rounded-md p-1" />
            }
            title={"Coins Spent Rs"}
            value={1340}
          />
          <Dashboardcard
            icon={
              <UserAddOutlined className=" text-orange-500 bg-orange-200 rounded-md p-1" />
            }
            title={"Amount Saved Rs"}
            value={1001}
          />
          <Dashboardcard
            icon={
              <MoneyCollectFilled className=" text-yellow-600 bg-yellow-200 rounded-md p-1" />
            }
            title={"Super Coins Rs"}
            value={1000}
          />
        </div>
        </Space>
        </div>
    )
}
export default Order;