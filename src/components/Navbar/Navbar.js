import React from 'react';
import { dataNavbar } from './dataNavbar';

const Navbar = (props) => {

  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          <div className="flex items-center w-1/12 h-20">
            <a href="/" className="text-white font-bold text-lg">
              <img
                src="https://blogger.zilog.online/static/media/logo.436f1557.png"
                className="w-6/12 m-auto"
              />
            </a>
          </div>

          <div className="flex items-center">
            {dataNavbar.map((data, index) => (
              <a
                key={index}
                href={data.path}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {data.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
