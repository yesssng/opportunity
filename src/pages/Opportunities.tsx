import React, { useState } from "react";
import CardList from "@/components/CardList";
import CategoryFilter from "@/components/CategoryFilter";
import jobInfo from "../../jobInfo.json";


const Opportunities: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(jobInfo.map(job => job.category)))];

  const filteredJobs =
    selectedCategory === "All"
      ? jobInfo
      : jobInfo.filter((job) => job.category === selectedCategory);

  return (
    <div className="h-[calc(100vh-130px)]">
      <h1 className="text-3xl font-bold text-left mt-2 mb-5 text-shadow-md">
        Opportunities
      </h1>
      <div className="flex justify-between">
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
    <div className="relative w-full mb-6">
    <div className="absolute bottom-0 left-0 w-full border-b border-gray-200 z-0"></div>
    <input
    placeholder="Search..."
    className="relative z-10 w-full bg-transparent text-right placeholder:text-right placeholder:mt-100 focus:outline-none"
    />
</div>
      </div>
      <CardList jobs={filteredJobs} />
    </div>
  );
};

export default Opportunities;
