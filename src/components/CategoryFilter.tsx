import React from 'react';

type Props = {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

const CategoryFilter: React.FC<Props> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="w-full flex gap-6 border-b border-gray-200 mb-6">
      {[...categories].map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`pb-2 font-medium ${
            selectedCategory === category
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600 hover:text-blue-600'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
