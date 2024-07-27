import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Ensure this import is correct

const Footer: React.FC = () => {
  return (
    <footer className="bg-cyan-900 text-white pt-12 pb-8 px-4 mt-12">
      <div className="mx-auto px-4 container overflow-hidden flex flex-col lg:flex-row justify-between">
        <a href="/" className="">
          <h1>FRIDAY</h1>
        </a>
        <div className="w-2/3 block sm:flex text-sm mt-6 lg:mt-0">
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Product</li>
            <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Features</a></li>
            <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Integrations</a></li>
            <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Pricing</a></li>
            <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">FAQ</a></li>
          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Company</li>

          </ul>
          <ul className="text-gray-700 list-none p-0 font-thin flex flex-col text-left w-full">
            <li className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Developers</li>

            <li><a href="#" className="inline-block py-2 px-3 text-gray-500 hover:text-white no-underline">Guides</a></li>
          </ul>
          <div className="text-gray-700 flex flex-col w-full ml-auto">
            <div className="inline-block py-2 px-3 text-white uppercase font-medium tracking-wide">Follow Us</div>
            <div className="flex pl-4 justify-start mt-2">
              <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                <FaFacebook className="fill-current w-5 h-5" />
              </a>
              <a className="block flex items-center text-gray-300 hover:text-white mr-6 no-underline" href="#">
                <FaTwitter className="fill-current w-5 h-5" />
              </a>
              <a className="block flex items-center text-gray-300 hover:text-white no-underline" href="#">
                <FaLinkedin className="fill-current w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 mt-4 pt-6 text-gray-600 border-t border-gray-800 text-center">
        © 2024 FRIDAY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
