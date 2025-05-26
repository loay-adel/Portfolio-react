import React from "react";
import { Link } from "react-router-dom";

const Error = () => {


  return (
    <div className="">
      <div className="container mx-auto px-4">
        <div className="flex gap-1 my-[2rem] text-gray-500 md:justify-start justify-center">
          <Link to="/" className="text-gray-400">Home</Link>
          <span>/</span>
          <span className="font-medium text-black">404 Error</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[60vh] bg-white">
        <div className="flex flex-col justify-center items-center gap-5 text-center">
          <h1 className="text-6xl font-bold">404 Not Found</h1>
          <p className="text-lg">Your visited page not found. You may go home page.</p>
          <Link to="/" className="bg-red-600 px-6 py-3 text-white hover:bg-red-800 rounded">Back to Home Page</Link>
        </div>
      </div>
    </div>
  );
};

export default Error;