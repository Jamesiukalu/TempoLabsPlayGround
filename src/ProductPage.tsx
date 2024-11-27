import React from 'react';
import Breadcrumb from './components/Breadcrumb';
import ProductHero from './components/ProductHero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Header from './components/Header';

import image from './assets/img/image1.png';
import image1 from './assets/img/image6.png';
import image2 from './assets/img/image2.png';
import image3 from './assets/img/image5.png';
import RecommendedProducts from './components/RecommendedProducts';
import ReviewSection from './components/ReviewSection';

const ProductPage: React.FC = () => {
  return (
    <div className="font-sans">
      <Header />
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <Breadcrumb />
        <ProductHero
          title="One Life Graphic T-Shirt"
          description="A stylish, comfortable t-shirt perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style."
          price={300}
          discountPrice={260}
          images={[image, image1, image2, image3]}
        />
        <ReviewSection />
        <RecommendedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
