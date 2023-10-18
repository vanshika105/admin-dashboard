import React from 'react';
import Emoji from './UI/Emoji';

const Footer = () => (
  <div className="mt-10">
    <p className="dark:text-gray-200 text-gray-700 text-center mx-6">
      Developed by{" "}
      <a
        href="https://www.linkedin.com/in/vanshika-kushwaha-547a0b14a/"
        className="font-semibold hover:text-blue-800"
      >
        Vanshika 
      </a>
      <Emoji symbol='👩‍💻' label='coder'/>
    </p>
    <p className="text-center hover:text-blue-800 text-xs">
      <a href="https://github.com/vanshika105/admin-dashboard">
        (View Source code)
      </a>
    </p>
  </div>
);

export default Footer;
