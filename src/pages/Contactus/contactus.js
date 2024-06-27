import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full md:my-10 md:mx-10 my-20 mx-20">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className=" text-lg md:text-3xl font-bold mb-4 text-blue-300">Contact Us</h1>
        <p className=" text-md md:text-lg mb-6">
          Please feel free to contact us for any inquiries or feedback.
        </p>
        <div className="flex flex-col space-y-3 md:space-y-4">
          <p className=" text-md md:text-lg">
            <span className="font-bold">Email:</span> abcd@gmail.com
          </p>
          <p className="text-md md:text-lg">
            <span className="font-bold">Phone:</span> +91 123-456-7890
          </p>
          <p className="text-md md:text-lg">
            <span className="font-bold">Address:</span> 123 Sector-3, Noida,
            India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
