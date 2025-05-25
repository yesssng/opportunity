import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar,} from 'recharts';
import { useAuth } from '@/AuthContext';

const employmentData = [
  { month: 'Jan', employed: 5 },
  { month: 'Feb', employed: 15 },
  { month: 'Mar', employed: 10 },
  { month: 'Apr', employed: 12 },
  { month: 'May', employed: 15 },
  { month: 'Jun', employed: 20 },
];

const data = [
  { name: 'Computer Science', employed: 1200, unemployed: 2400, amt: 2400 },
  { name: 'Media Technologies', employed: 3000, unemployed: 1398, amt: 2210 },
  { name: 'Big Data Analysis', employed: 2000, unemployed: 9800, amt: 2290 },
  { name: 'Mathematical and Computational Science', employed: 2780, unemployed: 3908, amt: 2000 },
  { name: 'Cyber Security', employed: 1890, unemployed: 4800, amt: 2181 },
  { name: 'Smart Technologies', employed: 2390, unemployed: 3800, amt: 2500 },
  { name: 'IT Management', employed: 3490, unemployed: 4300, amt: 2100 }
];

const AdminDashboard: React.FC = () => {
    const { firstName } = useAuth();

    return (
    <div className="h-[calc(100vh-130px)]">
        <h1 className="text-5xl font-bold text-left mt-2 mb-5 text-shadow-md mb-10">
            Welcome, {firstName}!
        </h1>        
      <div className="w-full bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Employed students by months</h2>

        <div className="flex flex-row gap-6">
          {/* LineChart */}
          <div className="w-1/2 h-96">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={employmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="employed"
                  stroke="#1d4ed8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* BarChart */}
          <div className="w-1/2 h-96">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="employed" stackId="a" fill="#1d4ed8" />
                <Bar dataKey="unemployed" stackId="a" fill="#6b8bff" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;