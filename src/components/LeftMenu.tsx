import { House, HeartHandshake, Users, LayoutDashboard, X, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext"; // путь может отличаться

const LeftMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { role } = useAuth();

  const userItems = [
    { name: "Dashboard", icon: <House />, path: "/home" },
    { name: "Opportunities", icon: <HeartHandshake />, path: "/opportunities" },
    { name: "My Applications", icon: <HeartHandshake />, path: "/my-applications" },
    { name: "Favorites", icon: <HeartHandshake />, path: "/favorites" }
  ];

  const adminItems = [
    { name: "Admin Dashboard", icon: <LayoutDashboard />, path: "/adminDashboard" },
    { name: "People", icon: <Users />, path: "/people" },
    { name: "Opportunities", icon: <Users />, path: "/people" },
    { name: "Administrators", icon: <Users />, path: "/people" } 
  ];

  const items = role === "admin" ? adminItems : userItems;

  return (
    <div className={`ml-5 mt-20 mb-20 fixed left-0 top-0 rounded-xl h-[calc(100vh-100px)] shadow-xl ${isOpen ? "w-64" : "w-16"} transition-all duration-300 flex flex-col z-3 bg-white`}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 focus:outline-none">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <ul className="flex flex-col gap-2">
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="block p-5 rounded hover:bg-gray-700 flex flex-row gap-4">
              {item.icon}
              {isOpen && item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
