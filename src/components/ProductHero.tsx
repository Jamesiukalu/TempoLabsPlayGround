import React from 'react';

interface ProductHeroProps {
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  images: string[];
}

const ProductHero: React.FC<ProductHeroProps> = ({ title, description, price, discountPrice, images }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap gap-6">
      {/* Image Section */}
      <div className="flex flex-col space-y-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            className={`w-20 h-20 object-cover rounded-md ${index === 0 ? 'border border-gray-400' : ''}`}
          />
        ))}
      </div>

      {/* Main Product Image */}
      <div className="flex-1">
        <img
          src={images[0]}
          alt="Main Product"
          className="w-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <div className="text-yellow-500 font-medium text-lg"> ⭐️  ⭐️  ⭐️ 4.5/5</div>
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-black">${discountPrice}</span>
          <span className="text-xl line-through text-gray-500">${price}</span>
          <span className="text-red-500 text-lg font-medium">-40%</span>
        </div>
        <p className="text-gray-700">{description}</p>

        {/* Colors */}
        <div>
          <h3 className="font-medium mb-2">Select Colors</h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-green-700 rounded-full border border-black"></button>
            <button className="w-8 h-8 bg-gray-800 rounded-full"></button>
            <button className="w-8 h-8 bg-blue-800 rounded-full"></button>
          </div>
        </div>

        {/* Sizes */}
        <div>
          <h3 className="font-medium mb-2">Choose Size</h3>
          <div className="flex space-x-4">
            {['Small', 'Medium', 'Large', 'X-Large'].map((size, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded border ${size === 'Large' ? 'bg-black text-white' : 'border-gray-300'}`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-gray-300 rounded">
            <button className="px-4 py-2">-</button>
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-12 text-center border-none focus:ring-0"
            />
            <button className="px-4 py-2">+</button>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
