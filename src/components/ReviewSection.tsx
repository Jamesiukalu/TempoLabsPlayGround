import React from "react";
import ReviewCard from "./ReviewCard";

interface Review {
  name: string;
  rating: number;
  content: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Samantha D.",
    rating: 5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
    date: "August 15, 2023",
  },
  {
    name: "Ethan R.",
    rating: 4,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye.",
    date: "August 16, 2023",
  },
  {
    name: "Samantha D.",
    rating: 5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
    date: "August 15, 2023",
  },
  {
    name: "Ethan R.",
    rating: 4,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye.",
    date: "August 16, 2023",
  },
  {
    name: "Samantha D.",
    rating: 5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch.",
    date: "August 15, 2023",
  },
  {
    name: "Ethan R.",
    rating: 4,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye.",
    date: "August 16, 2023",
  },
];

const ReviewSection: React.FC = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      {/* Tab Menu */}
      <div className="flex justify-between border-b mb-6 px-16">
        <button className="px-6 py-2 font-medium text-gray-600 hover:text-black">
          Product Details
        </button>
        <button className="px-6 py-2 font-medium text-black border-b-2 border-black">
          Rating & Reviews
        </button>
        <button className="px-6 py-2 font-medium text-gray-600 hover:text-black">
          FAQs
        </button>
      </div>

      {/* Reviews Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">All Reviews (451)</h2>
        <div className="flex items-center space-x-4">
          {/* Filter Dropdown */}
          <select
            className="bg-white border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring focus:ring-blue-300"
            defaultValue="latest"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="lowest-rating">Lowest Rating</option>
          </select>
          {/* Write Review Button */}
          <button className="bg-black text-white px-4 py-2 rounded-md text-sm">
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-md text-sm mt-8 border mx-auto flex justify-center">
            Load more Reviews
      </button>
    </div>
  );
};

export default ReviewSection;
