import React from "react";
import { HiDotsVertical } from "react-icons/hi";

interface ReviewCardProps {
  name: string;
  rating: number;
  content: string;
  date: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  content,
  date,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-lg">{name}</span>
        <button className="text-gray-400 hover:text-gray-600">
          <HiDotsVertical size={20} />
        </button>
      </div>

      {/* Rating */}
      <div className="text-yellow-400 text-lg mb-2">
        {"★".repeat(rating)}
        <span className="text-gray-300">
          {"★".repeat(5 - rating)}
        </span>
      </div>

      {/* Review Content */}
      <p className="text-gray-600 text-sm mb-4">{content}</p>

      {/* Review Date */}
      <div className="text-xs text-gray-400">{`Posted on ${date}`}</div>
    </div>
  );
};

export default ReviewCard;
