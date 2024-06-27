import { useEffect, useState } from "react";
// import { getAllproducts } from "../utils/mockdata";
import { Card, Image, List, Typography, Badge, Rate, Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../Store.js/cartSlice";
import { fetchProducts } from "../../Store.js/ProductSlice";

const Products = () => {
  //getting data from api call getallproducts in mock utils

  //   const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(false);

  //  // method 1
  //   useEffect(() => {
  //     getAllproducts().then((res) => {
  //       setItems(res.products);
  //     });
  //   }, []);

  // //method 2 fetch api
  // useEffect(() => {
  //   setLoading(true);
  //   fetchdata();

  // }, []);
  // const fetchdata = async () => {
  //   try {
  //     const data = await fetch("https://dummyjson.com/products");
  //     const json = await data.json();
  //     //console.log(json);
  //     setItems(json.products);
  //   } catch (error) {
  //    // console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


//// method 3 using redux store
  const k = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    k(fetchProducts());
  }, [k]);


  //handling add item in cart button

  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    //dispatch action
    dispatch(addItem(product));
  };

//error msg
if (error) {
  return <div>Error: {error}</div>;
}
  //loading and adding spin component
  if (loading) {
    return <Spin spinning size="large" className=" flex justify-center" />;
  }
  return (
    <div className="mx-3 flex flex-wrap  md:justify-evenly gap-y-5 gap-x-2">
      {items.map((product, index) => (
        <div
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4 px-2 flex items-center justify-center"
          key={index}
        >
          <div className=" h-full w-full">
            <Badge.Ribbon text={"$" + product.price} />
            <div className=" flex flex-col items-center justify-start border gap-y-3 rounded-xl m-2 h-full w-full">
              <h2 className="mt-1 font-semibold text-center">
                {product.title}
              </h2>
              <p>
                {
                  <img
                    alt="product.title"
                    src={product.thumbnail}
                    className=" h-40 w-40 lg:w-64 lg:h-52 rounded-md md:rounded-2xl "
                  />
                }
              </p>
              <div className=" flex flex-wrap justify-around gap-10">
                <Typography.Text className=" text-[15px]" type="danger">
                  {" "}
                  ${product.price}
                </Typography.Text>
                <Typography.Text className=" text-[15px]" delete>
                  ${product.price + product.discountPercentage}
                </Typography.Text>
              </div>
              <div className=" text-center m-3">
                <Typography.Paragraph
                  ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                >
                  {product.description}
                </Typography.Paragraph>
              </div>
              <div className="mb-1">
                <Rate allowHalf disabled defaultValue={product.rating} />
              </div>
              <div className=" mb-2">
                <Button
                  className=" bg-blue-300"
                  onClick={() => handleAddItem(product)}
                >
                  Add to cart{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

// w-64 h-60 lg:w-80 lg:h-80
