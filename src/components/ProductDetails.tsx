import React from "react";

const ProductDetails: React.FC = () => {
  const reviews = [
    {
      name: 'Samantha D.',
      review:
        'I absolutely love this t-shirt! The design is unique, and the fabric feels so comfortable...',
      rating: 5,
    },
    {
      name: 'Alex M.',
      review:
        'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch...',
      rating: 4,
    },
  ];

  return (
    <section className="p-10">
      <h2 className="text-xl font-bold mb-4">Rating & Reviews</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow-sm bg-gray-50"
          >
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">
              {'★'.repeat(review.rating)}{' '}
              {'☆'.repeat(5 - review.rating)}
            </p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
