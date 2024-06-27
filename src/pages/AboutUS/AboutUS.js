import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-3 md:mb-20 md:mt-6 flex-1 ">
      <div className=" mx-4 md:mx-24 bg-white rounded-lg shadow-lg p-8">
        <h1 className=" text-xl md:text-3xl font-bold mb-4 text-blue-300 text-center">About Us</h1>
        <p className="text-sm md:text-lg mb-6">
          Welcome to our discounted store! At our store, we are committed to providing high-quality products at unbeatable prices. 
          We source our products directly from trusted manufacturers and suppliers to ensure both quality and affordability.
        </p>
        <p className="text-sm md:text-lg mb-6">
          Our mission is to make shopping for everyday essentials and special treats more affordable for everyone. 
          Whether you're shopping for electronics, clothing, home goods, or gifts, you'll find amazing deals at our store.
        </p>
        
        <p className="text-sm md:text-lg mb-6">
          Thank you for choosing our discounted store. We appreciate your support and look forward to serving you for all your shopping needs!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
