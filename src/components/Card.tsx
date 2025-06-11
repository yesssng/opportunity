import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

interface JobCardProps {
  job: {
    id: number;
    image: string;
    title: string;
    company: string;
    location: string;
    category: string;
    yearOfStudy: string[];
    description: string;
    deadline: string;
  };
}

const Card: React.FC<JobCardProps> = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobPage/${job.id}`);
  };

  const truncatedDescription =
    (job.description !== null && job.description !== undefined)
    ? (job.description.length > 100
      ? job.description.substring(0, 99) + "..."
      : job.description)
    : "No description";

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white-100 flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Image */}
      <img src="src/assets/google-logo.png" alt={job.title} className="w-full md:w-20 h-20 object-cover m-10" />

      {/* Content */}
      <div className="p-5 flex flex-col justify-between w-full relative">
        <div>
          <h2 className="font-bold text-lg text-left">{job.title}</h2>
          <p className="text-sm text-gray-600 text-left">{job.company}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-black text-white text-xs rounded px-2 py-1">{(job.category !== null) ? job.category.toLowerCase() : "N/A"}</span>
            {job.yearOfStudy.map((year, idx) => (
              <span key={idx} className="bg-gray-200 text-xs rounded px-2 py-1">
                {year}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-gray-800 text-left">{(truncatedDescription !== null) ? truncatedDescription : "N/A"}</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button onClick={handleClick} className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm px-4 py-2 rounded">
            Apply Now
          </button>
          <button className="bg-black text-white text-sm px-4 py-2 rounded">
            Learn More
          </button>
          <Heart className="text-gray-500 cursor-pointer ml-30 mt-1" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Card;
