import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 mt-auto">
      <p className="text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AI Image Generator. Made with ❤️ by Shiv
      </p>
    </footer>
  );
};

export default Footer;
