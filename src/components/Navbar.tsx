import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-100">
      <h1 className="text-lg font-bold">SHOP.CO</h1>
      <ul className="flex gap-4">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search for products..."
          className="p-2 rounded-md text-black"
        />
        <button>Cart</button>
        <button>Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
