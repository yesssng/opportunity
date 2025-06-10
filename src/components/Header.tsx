import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import ProfileModal from "@/pages/ProfileModal";

const Header: React.FC = () => {
  const { username, firstName, lastName, setUser } = useAuth();
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <header className="w-full p-4 flex justify-between items-center fixed top-0 left-0 shadow-md bg-white z-3">
      <ProfileModal visible={modalVisible} onClose={() => setModalVisible(false)} />

      {/* Left - Logo */}
      <div className="flex items-center">
        <img src="src/assets/aitu-logo.png" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Right - Notification & Profile */}
      <div className="flex items-center gap-4">
        {/* Bell Icon */}
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://via.placeholder.com/40" alt="User" />
              <AvatarFallback>
                {firstName ? firstName[0].toUpperCase() : ""}
                {lastName ? lastName[0].toUpperCase() : ""}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setModalVisible(true)}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="mr-4">{username}</span>
      </div>
    </header>
  );
};

export default Header;
