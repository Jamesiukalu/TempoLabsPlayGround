import React from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  rating,
  price,
  originalPrice,
  discount,
}) => {
  return (
    <div className="text-left hover:shadow-sm">
      {/* Product Image */}
      <img src={image} alt={title} className="w-auto object-cover rounded-md mb-4" />

      {/* Product Title */}
      <h3 className="text-md font-medium text-gray-800">{title}</h3>

      {/* Rating */}
      <div className="flex justify-left items-center my-2">
        <span className="text-yellow-500 text-sm mr-1">⭐</span>
        <span className="text-yellow-500 text-sm">{rating}</span>
        <span className="text-gray-500 text-sm">/5</span>
      </div>

      {/* Pricing */}
      <div className="mt-2">
        <span className="text-md font-semibold text-black">${price}</span>
        {originalPrice && (
          <span className="text-sm line-through text-gray-500 ml-2">${originalPrice}</span>
        )}
        {discount && (
          <span className="text-sm text-red-500 ml-2">-{discount}%</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
