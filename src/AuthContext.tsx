import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  role: "USER" | "ADMIN";
  token: string;
}

interface AuthContextType extends User {
  setUser: (user: User) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser) as Partial<User>;

        return {
          username: parsedUser.username ?? "", 
          firstName: parsedUser.firstName ?? "", 
          lastName: parsedUser.lastName ?? "", 
          role: parsedUser.role ?? "user",
          token: parsedUser.token ?? "",
        };
      } catch {
        console.error("Failed to parse user data from localStorage");
      }
    }

    return { username: "", firstName: "", lastName: "", role: "USER", token: "" };
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ ...user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};