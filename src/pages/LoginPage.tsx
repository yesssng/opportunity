import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Terminal } from "lucide-react"
import users from '../../users.json' with { type: 'json' };
import { useAuth } from '../AuthContext'
import { useEffect } from 'react'
import axios from 'axios'

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

  const handleLogin = async (): Promise<void> => {
  try {
    // 1. POST-запрос для получения токена
    const loginResponse = await axios.post("http://localhost:8080/api/v1/authentication/login", {
      email: username,
      password,
    });

    const token = loginResponse.data.token;
    console.log(token)
    localStorage.setItem("token", token);

    // 2. GET-запрос для получения информации о пользователе
    const userResponse = await axios.get("http://localhost:8080/api/v1/authentication/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const user = userResponse.data;
    console.log(user)

    // Обновление AuthContext
    setUser({
      username: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    });

    setAlertMessage("Login successful! You can continue using the app.");

    // Перенаправление по роли
    setTimeout(() => {
      navigate(user.role === "ADMIN" ? "/adminDashboard" : "/home");
    }, 1500);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      alert(error.response?.data?.message || "Login failed.");
    } else {
      alert("Unexpected error during login.");
    }
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