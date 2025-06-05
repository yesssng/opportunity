import { useAuth } from "@/AuthContext";
import React, { useEffect } from "react";

interface ProfileModalProps {
  visible: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ visible, onClose }) => {
  const { username, firstName, lastName } = useAuth();  

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-[900px] h-[500px] flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-white-100 rounded-3xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h1 className="border-1 rounded-3xl p-40">Email: {username}  Name: {firstName}  Last Name: {lastName}</h1>
      </div>
    </div>
  );
};

export default ProfileModal;
