import RecentOpportunity from "./RecentOpportunity";

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
  contacts: {
    email: string;
    phone: string;
  };
};

type Props = {
  jobs: Job[];
};


const RecentOpportunityList: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-left text-3xl">Recent opportunities</h2>
      {jobs.slice(0, 5).map((job) => (
        <RecentOpportunity key={job.id} job={job} />
      ))}
    </div>
  );
};

export default RecentOpportunityList;
