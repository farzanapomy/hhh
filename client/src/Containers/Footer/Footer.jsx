import React from 'react';
import { AiOutlineApple } from 'react-icons/ai';
import { BiLogoPlayStore } from 'react-icons/bi';
import { ImVk } from 'react-icons/im';

const Footer = () => {
  const links = [
    { label: 'User agreement', href: '#' },
    { label: 'Contacts', href: '#' },
    { label: 'Delivery', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Become a partner', href: '#' },
    { label: 'Become a courier', href: '#' },
    { label: 'Eats for Business', href: '#' },
    { label: 'Plastic recycling', href: '#' },
    { label: 'Order food in the Yandex Go app', href: '#' },
    { label: 'Feedback', href: '#' },
  ];
  return (
    <footer className="bg-white text-gray-800 py-20 my-6">
      {/* App Section */}
      <div className="max-w-screen-lg mx-auto text-start mb-20">
        <h3 className="text-xl font-semibold">Even easier in the app</h3>
        <div className="flex justify-start space-x-4 mt-4">
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
            <AiOutlineApple />
            App Store
          </button>
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg">
            <BiLogoPlayStore />
            Play Store
          </button>
        </div>
      </div>

      {/* Company Information Section */}
      <div className="max-w-screen-lg mx-auto text-center">
        <h4 className="text-lg font-semibold mb-4">Company information</h4>
        <div className="flex flex-wrap justify-center gap-4 text-gray-600">
          {links?.map((link, index) => (
            <a key={index} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t pt-4">
        <div className="flex justify-between items-center max-w-screen-lg mx-auto text-sm text-gray-500">
          <p>© 2018–2024 Yandex Eats LLC</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white p-2 rounded-full hover:opacity-80"
            >
              <ImVk />
            </a>
            <span>Project for Yandex</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
