import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jobInfo from '../../jobInfo.json';
import { Mail } from 'lucide-react';

type Job = {
  id: number;
  image: string;
  title: string;
  company: string;
  location: string;
  category: string;
  yearOfStudy: string[];
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  deadline: string;
  contacts: {
    email: string;
    phone: string;
  };
};

const JobPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const [jobData, setJobData] = useState<Job | null>(null);

  useEffect(() => {
    if (jobId) {
      const job = jobInfo.find((j) => j.id === Number(jobId));
      setJobData(job || null);
    }
  }, [jobId]);

  if (!jobData) {
    return <div className="p-6 text-center text-gray-500">Job not found</div>;
  }

  return (
    <div className="w-full px-0 mt-[-10px] py-8 bg-gradient-to-br from-white via-blue-50 to-white-100 rounded-3xl shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-6 px-8">
      <div className="flex-shrink-0">
      </div>
      <div className="flex-1 text-left">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">{jobData.title}</h1>
        <div className="flex flex-wrap items-center gap-2 mb-1">
        <span className="text-lg text-gray-700 font-medium">{jobData.company}</span>
        <span className="text-gray-400">•</span>
        <span className="text-gray-600">{jobData.location}</span>
        </div>
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        {jobData.category}
        </span>
      </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8 px-8 text-left">
      <div>
        <h4 className="text-md font-semibold text-blue-700 mb-1">Year of Study</h4>
        <p className="text-gray-800">{jobData.yearOfStudy.join(', ')}</p>
      </div>
      <div>
        <h4 className="text-md font-semibold text-blue-700 mb-1">Deadline</h4>
        <p className="text-gray-800">{jobData.deadline}</p>
      </div>
      </div>
      </div>
      <hr />
      
      {/* Description */}
      <div className="mb-8 px-8 text-left mt-5">
      <div className='flex items-center gap-2 mb-3'>
      <Mail size="20" className="text-blue-600 mb-3" />
      <h2 className="text-2xl font-semibold text-blue-800 mb-3">Description</h2>
      </div>
      <p className="text-gray-800 leading-relaxed">{jobData.description}</p>
      </div>
      

      {/* Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-8 px-8 text-left">
      {/* Requirements */}
      <div className='rounded-lg p-4 shadow-sm'>
      <div className='flex items-center gap-2'>
      <Mail size="20" className="text-blue-600 mb-2" />
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Requirements</h3>
      </div>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
        {jobData.requirements.map((req, i) => (
          <li key={i}>{req}</li>
        ))}
        </ul>
      </div>
      {/* Responsibilities */}
      <div className='rounded-lg p-4 shadow-sm'>
      <div className='flex items-center gap-2'>
      <Mail size="20" className="text-blue-600 mb-2" />
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Responsibilities</h3>
      </div>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
        {jobData.responsibilities.map((res, i) => (
          <li key={i}>{res}</li>
        ))}
        </ul>
      </div>
      </div>

      {/* Benefits */}
      <div className="mb-8 px-8 text-left ">
      <div className='flex items-center gap-2'>
      <Mail size="20" className="text-blue-600 mb-2" />
      <h3 className="text-xl font-semibold text-blue-800 mb-2">Benefits</h3>
      </div>
      <ul className="list-disc list-inside text-gray-800 space-y-1">
        {jobData.benefits.map((benefit, i) => (
        <li key={i}>{benefit}</li>
        ))}
      </ul>
      </div>

      {/* Contacts */}
      <div className="mb-8 bg-blue-50 rounded-lg p-4 border border-blue-100 mx-8 text-left">
      <h4 className="text-md font-semibold text-blue-700 mb-2">Contact</h4>
      <div className="flex flex-col gap-1">
        <div className='flex items-center gap-2'>
        <Mail size="20"/>
        <span className="text-gray-800"><strong>Email:</strong> <a href={`mailto:${jobData.contacts.email}`} className="text-blue-600 hover:underline">{jobData.contacts.email}</a></span>
        </div>
        <div className='flex items-center gap-2'>
        <Mail size="20"/>
        <span className="text-gray-800"><strong>Phone:</strong> <a href={`tel:${jobData.contacts.phone}`} className="text-blue-600 hover:underline">{jobData.contacts.phone}</a></span>
        </div>
      </div>

      </div>

      {/* Apply Button */}
      <div className="px-8">
      <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-200 text-left">
        Apply Now
      </button>
      </div>
    </div>
  );
};

export default JobPage;
