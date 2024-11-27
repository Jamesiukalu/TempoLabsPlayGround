import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-black">
        <div className="flex flex-row self-center justify-between bg-black text-white p-10 rounded-r-lg w-4/5 ">
          <div className="col me-4">
            <h1 className="font-bold text-6xl">Stay Up to Date About Our Latest Offers</h1>
          </div>
          <div className="flex flex-col ">
            <div className='mb-2'>
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-8 py-2 rounded-lg bg-gray-50 text-black"
                />
            </div>
            <div>
              <button className="px-8 py-2 bg-gray-50 text-black rounded-lg">
                  Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      <div className="flex justify-between items-center mt-10">
        <p>© SHOP.CO 2000-2023. All Rights Reserved</p>
        <div className="flex gap-4">
          <button>Privacy Policy</button>
          <button>Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
