import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

type ApplicantType = {
  id: number;
  username: string;
  group: string;
  firstName: string;
  lastName: string;
  contacts?: {
    phone?: string;
  };
  education?: {
    major?: string;
    year?: number;
  };
  location?: {
    city?: string;
    country?: string;
  };
};

type Props = {
  applicants?: ApplicantType[]; // добавлена опциональность
};

const ApplicantList: React.FC<Props> = ({ applicants }) => {
  const navigate = useNavigate();

  const handleRowClick = (id: number) => {
    navigate(`/applicant/${id}`);
  };

  if (!applicants || applicants.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        Нет доступных заявителей.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700 text-sm">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Username</th>
            <th className="px-4 py-2 text-left">Group</th>
            <th className="px-4 py-2 text-left">First Name</th>
            <th className="px-4 py-2 text-left">Last Name</th>
            <th className="px-4 py-2 text-left">Phone</th>
            <th className="px-4 py-2 text-left">Major</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Country</th>
            <th className="px-4 py-2 text-left">City</th>
            <th className="px-4 py-2 text-left">Applications</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant) => (
            <tr
              key={applicant.id}
              onClick={() => handleRowClick(applicant.id)}
              className="cursor-pointer hover:bg-gray-50 text-sm text-gray-800"
            >
              <td className="px-4 py-2">{applicant.id ?? "—"}</td>
              <td className="px-4 py-2">{applicant.username ?? "—"}</td>
              <td className="px-4 py-2">{applicant.group ?? "—"}</td>
              <td className="px-4 py-2">{applicant.firstName ?? "—"}</td>
              <td className="px-4 py-2">{applicant.lastName ?? "—"}</td>
              <td className="px-4 py-2">{applicant.contacts?.phone ?? "—"}</td>
              <td className="px-4 py-2">{applicant.education?.major ?? "—"}</td>
              <td className="px-4 py-2">{applicant.education?.year ?? "—"}</td>
              <td className="px-4 py-2">{applicant.location?.country ?? "—"}</td>
              <td className="px-4 py-2">{applicant.location?.city ?? "—"}</td>
                <td className="px-4 py-2"><Button className="text-black bg-sky-50 shadow-sm">4 applications</Button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicantList;
