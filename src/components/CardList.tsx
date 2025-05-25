import Card from "./Card";

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


const CardList: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </div>
  );
};

export default CardList;
