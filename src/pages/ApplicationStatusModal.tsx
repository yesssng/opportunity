import React from "react";
import { Progress } from "@/components/ui/progress";

const ApplicationStatusModal: React.FC = () => {
  return (
    <div className="w-80 bg-white rounded-lg shadow-lg p-5 ml-40 mt-13">
      <h2 className="text-lg font-semibold mb-4 text-gray-900">Application Status</h2>

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-1">Submitted</div>
        <Progress value={100} className="h-2 bg-gray-200" style={{ backgroundColor: '#e5e7eb' }} />
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-1">Interview</div>
        <Progress value={60} className="h-2 bg-gray-200" style={{ backgroundColor: '#e5e7eb' }} />
      </div>

      <div className="mb-4">
        <div className="text-sm font-medium text-gray-700 mb-1">Offered</div>
        <Progress value={40} className="h-2 bg-gray-200" style={{ backgroundColor: '#e5e7eb' }} />
      </div>

      <div>
        <div className="text-sm font-medium text-gray-700 mb-1">Rejected</div>
        <Progress value={50} className="h-2 bg-gray-200" style={{ backgroundColor: '#e5e7eb' }} />
      </div>
    </div>
  );
};

export default ApplicationStatusModal;
