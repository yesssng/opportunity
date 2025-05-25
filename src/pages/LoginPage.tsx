import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Terminal } from "lucide-react"
import users from '../../users.json' with { type: 'json' };
import { useAuth } from '../AuthContext'
import { useEffect } from 'react'

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


const LoginPage: React.FC = () => {
  useEffect(() => {
  document.body.style.overflow = 'hidden';

  return () => {
    document.body.style.overflow = 'auto';
  };
  }, []);


  const { setUser } = useAuth();
  const [username, setLocalUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [alertMessage, setAlertMessage] = useState<string | null>(null); 
  const navigate = useNavigate();

  const handleLogin = (): void => {
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );

  if (foundUser) {
    const newUser = {
      username: foundUser.username,
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      role: foundUser.role,
    };

    setUser(newUser);
    setAlertMessage("Login successful! You can continue using the app.");

    // перенаправление по роли
    setTimeout(() => {
      if (foundUser.role === "admin") {
        navigate("/adminDashboard");
      } else {
        navigate("/home");
      }
    }, 2000);
  } else {
    alert("Invalid username or password");
  }
};

  return (
    <>

    {alertMessage && (
        <div className="fixed top-4 right-4 z-50">
          <Alert className="shadow-lg">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>{alertMessage}</AlertDescription>
          </Alert>
        </div>
    )}
    <div className="max-w-[300px] mx-auto flex flex-col items-center justify-center min-h-screen gap-[10px]">
          <img className='w-70 absolute mb-120' src="src\assets\opplogo.png" alt="logo" />
          <h1 className='text-4xl font-bold mb-7'>Login</h1>
          <Input 
              type="text" 
              placeholder='Username'
              value={username}
              onChange={(e) => setLocalUsername(e.target.value)}
          />
          <Input 
              type="password" 
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} className="w-full">
              Login
          </Button>
      </div>
    </>
  )
}
  
  export default LoginPage