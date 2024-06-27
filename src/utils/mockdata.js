export const getAllproducts = () => {
  return fetch("https://dummyjson.com/products").then((res) => res.json());
};
//aysnc extra reducer, action, 
