import React from 'react';

function Navbar() {
  return (
    <div className="fixed z-[999] font-[`Neue Montreal`] px-6 md:px-20 py-6 md:py-8 w-full bg-zinc-900 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="logo mb-4 md:mb-0">
        <svg
          width="72"
          height="30"
          viewBox="0 0 72 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG paths unchanged */}
          <path d="M9.8393 10.2032C4.22951..." fill="currentColor"></path>
          <path d="M62.8086 29.4855H67.1222..." fill="currentColor"></path>
          <path d="M67.6816 0.172852V6.13439..." fill="currentColor"></path>
          <path d="M31.5648 25.7016C28.5393..." fill="currentColor"></path>
          <path d="M52.4097 10.1387C51.2512..." fill="currentColor"></path>
        </svg>
      </div>

      {/* Links */}
      <div className="links text-white flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
        {["Services", "Our work", "About Us", "Insights", "Contact"].map((item, index) => (
          <a
            key={index}
            className={`text-base md:text-lg font-light capitalize ${index === 4 ? "md:ml-32" : ""}`}
            href="#"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
