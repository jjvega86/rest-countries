import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <p className="font-bold text-xl">Where in the world?</p>
      <p className="text-md pr-2">
        <span>🌙</span> Dark Mode
      </p>
    </header>
  );
};

export default Header;
