import React, { useState } from "react";
import CardList from "@/components/CardList";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import jobInfo from "../../jobInfo.json";
import { useAuth } from "../AuthContext";
import { CardWithForm } from "../components/CardWithForm"; // Импортируй свою форму

const Opportunities: React.FC = () => {
  const { role } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [open, setOpen] = useState(false);

  const categories = ["All", ...Array.from(new Set(jobInfo.map(job => job.category)))];

  const filteredJobs =
    selectedCategory === "All"
      ? jobInfo
      : jobInfo.filter((job) => job.category === selectedCategory);

  return (
    <div className="h-[calc(100vh-130px)]">
      <div className="flex items-center justify-between mt-2 mb-5">
        <div className="flex items-center gap-4">
          {role === "admin" && (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Add Opportunity
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Add Opportunity</h2>
                </div>
                <CardWithForm />
              </DialogContent>
            </Dialog>
          )}
          <h1 className="text-3xl font-bold text-shadow-md">Opportunities</h1>
        </div>
      </div>

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
