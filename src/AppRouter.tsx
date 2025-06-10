import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import JobPage from "./pages/JobPage";
import AdminDashboard from "./pages/AdminDashboard";
import Opportunities from "./pages/Opportunities";
import MyApplications from "./pages/MyApplications";
import NotFoundPage from "./pages/NotFoundPage";
import Favorites from "./pages/Favorites";
import People from "./pages/People";
import { Navigate } from "react-router-dom";



const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                
                <Route path="/login" element={<LoginPage />} />
                
                <Route element={<ProtectedRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/jobPage/:jobId" element={<JobPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/opportunities" element={<Opportunities />} />
                        <Route path="/my-applications" element={<MyApplications />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Route>
                </Route>

                <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
                    <Route element={<MainLayout />}>
                    <Route path="/adminDashboard" element={<AdminDashboard />} />
                    <Route path="/people" element={<People />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;




