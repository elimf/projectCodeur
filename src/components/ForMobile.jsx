import React from "react";

const ForMobile = () => {
  return (
    <div className="bg-red-500 p-4 text-white text-center md:hidden">
      <p className="text-lg font-semibold">
        This application is not optimized for mobile devices.
      </p>
      <p className="text-sm mt-2">
        Please try on a tablet or computer for a better experience.
      </p>
    </div>
  );
};

export default ForMobile;
