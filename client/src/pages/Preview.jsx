import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loder';
import ResumePreview from '../components/ResumePreview';
import { ArrowLeftIcon } from 'lucide-react';
import api from '../configs/api';

const Preview = () => {
  const { resumeId } = useParams();

  const [resumeData, setResumeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadResume = async () => {
    try {
      const { data } = await api.get('/api/resumes/public/' + resumeId);
      setResumeData(data.resume);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadResume();
  }, [resumeId]);

  return isLoading ? (
    <Loader />
  ) : resumeData ? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview
          data={resumeData}
          template={resumeData.template}
          accentColor={resumeData.accent_color}
          classes='py-4 bg-white'
        />
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-center text-6xl text-slate-400 font-medium'>
        Resume not found
      </p>
      <a
        href='/'
        className='mt-6 bg-blue-500 hover:bg-blue-600
            text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1
            ring-blue-400 flex items-center transition-colors'
      >
        <ArrowLeftIcon className='mr-2 size-4' />
        go to home page
      </a>
    </div>
  );
};

export default Preview;
