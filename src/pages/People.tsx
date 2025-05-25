import ApplicantList from "@/components/ApplicantList";
import users from "../../users.json";

const People: React.FC = () => {
    return (
      <div className="h-[calc(100vh-130px)]">
      <h1 className="text-3xl font-bold text-left mt-2 mb-5 text-shadow-lg">People</h1> 
      <ApplicantList applicants={users}/> 
      </div>
    )
}

export default People;