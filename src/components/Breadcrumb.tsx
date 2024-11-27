import React from 'react';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="text-sm text-gray-500 mb-4 ml-8">
      <ul className="flex space-x-2">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li>/</li>
        <li><a href="/shop" className="hover:underline">Shop</a></li>
        <li>/</li>
        <li><a href="/shop/men" className="hover:underline">Men</a></li>
        <li>/</li>
        <li className="text-gray-900 font-medium">T-shirts</li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
