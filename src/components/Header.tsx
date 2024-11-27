import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white text-center py-2">
      <p>
        Sign up and get <span className="font-bold">20% off</span> on your first order.{' '}
        <a href="#" className="text-blue-white underline">
          Sign Up Now
        </a>
      </p>
    </header>
  );
};

export default Header;
