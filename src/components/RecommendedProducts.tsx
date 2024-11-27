import React from 'react';
import ProductCard from './PostCard';
import Frame1 from '../assets/img/Frame1.png';
import Frame2 from '../assets/img/Frame2.png';
import Frame3 from '../assets/img/Frame3.png';
import Frame4 from '../assets/img/Frame4.png';

const RecommendedProducts: React.FC = () => {
  const products = [
    {
      image: Frame4,
      title: 'Polo with Contrast Trims',
      rating: 4.0,
      price: 212,
      originalPrice: 242,
      discount: 20,
    },
    {
      image: Frame3,
      title: 'Gradient Graphic T-shirt',
      rating: 3.5,
      price: 145,
    },
    {
      image: Frame2,
      title: 'Polo with Tipping Details',
      rating: 4.5,
      price: 180,
    },
    {
      image: Frame1,
      title: 'Black Striped T-shirt',
      rating: 5.0,
      price: 120,
      originalPrice: 150,
      discount: 30,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;
