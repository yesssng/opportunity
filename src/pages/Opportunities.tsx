import React, { useState, useEffect } from "react";
import CardList from "@/components/CardList";
import CategoryFilter from "@/components/CategoryFilter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import axios from "axios";
//import jobInfo from "../../jobInfo.json";
import { useAuth } from "../AuthContext";
import { CardWithForm } from "../components/CardWithForm"; // Импортируй свою форму

type Job = {
  id: number;
  image: string;
  title: string;
  company: string;
  location: string;
  category: string;
  yearOfStudy: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  deadline: string;
};

const Opportunities: React.FC = () => {
  const { role, token } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [jobInfo, setJobInfo] = useState<Job[]>([]); // заменили opportunities на jobInfo
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/opportunities", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setJobInfo(response.data); 
      } catch (error) {
        console.error("Failed to fetch opportunities", error);
      }
    };
    fetchJobs();
  }, [token]);
  console.log(token)

  const categories = ["All", ...Array.from(new Set(jobInfo.map(job => job.category)))];

  const filteredJobs =
    selectedCategory === "All"
      ? jobInfo
      : jobInfo.filter((job) => job.category === selectedCategory);

  return (
    <div className="h-[calc(100vh-130px)]">
      <div className="flex items-center justify-between mt-2 mb-5">
        <div className="flex items-center gap-4">
          {role === "ADMIN" && (
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
                <CardWithForm onSuccess={(newJob) => {
  console.log("✅ New job received:", newJob);
  // Например, добавление в список:
  setJobInfo((prev) => [...prev, newJob]);
}} />
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
