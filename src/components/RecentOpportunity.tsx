import { useNavigate } from "react-router-dom";

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

const RecentOpportunity: React.FC<JobCardProps> = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/jobPage/${job.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-br from-white via-blue-50 to-white-100 flex items-center gap-4 bg-white p-4 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer overflow-x-auto whitespace-nowrap"
    >
      {/* Image */}
      <img
        src={job.image}
        alt={job.title}
        className="w-12 h-12 object-contain flex-shrink-0"
      />

      {/* Title */}
      <span className="text-sm font-semibold text-gray-800">{job.title}</span>

      {/* Company */}
      <span className="text-sm text-gray-600">{job.company}</span>

      {/* Category */}
      <span className="bg-black text-white text-xs rounded px-2 py-1">
        {job.category}
      </span>

      {/* Years of Study */}
      {job.yearOfStudy.map((year, idx) => (
        <span
          key={idx}
          className="bg-gray-200 text-xs rounded px-2 py-1 text-gray-700"
        >
          {year}
        </span>
      ))}
    </div>
  );
};

export default RecentOpportunity;
