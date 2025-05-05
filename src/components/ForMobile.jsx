import React from "react";

const ForMobile = () => {
  return (
    <div className="bg-red-500 p-4 text-white text-center lg:hidden">
      <p className="text-lg font-semibold">
        This application is not optimized for mobile devices and little screens.
      </p>
      <p className="text-sm mt-2">
        Please try on a other device or a bigger screen.
      </p>
    </div>
  );
};

export default ForMobile;
