import RecentOpportunityList from "@/components/RecentOpportunityList";
import { useAuth } from "../AuthContext";
import React from "react";
import jobInfo from "../../jobInfo.json";
import ApplicationStatusModal from "./ApplicationStatusModal";


const Home: React.FC = () => {
    const { firstName } = useAuth();
    const status = "Applied"; 

    return (
        <div className="h-[calc(100vh-130px)]">
            <h1 className="text-5xl font-bold text-left mt-2 mb-5 text-shadow-md">
                Welcome, {firstName}!
            </h1>

            <p className="text-2xl text-left mb-5">
                Your status: {status}
            </p>
            <div className="flex space-x-4">
            <RecentOpportunityList jobs={jobInfo}/>
            <ApplicationStatusModal/>
            </div>
        </div>
    )
}

export default Home;