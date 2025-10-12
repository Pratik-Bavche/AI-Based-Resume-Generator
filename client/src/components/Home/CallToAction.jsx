import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="mt-28 mb-25">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <section className="flex flex-col items-center justify-center mx-auto max-md:mx-2 max-md:px-2 max-w-5xl w-full text-center rounded-2xl py-16 bg-slate-100/70">
        <svg width="42" height="46" viewBox="0 0 42 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.5 6.619 9.5 5.438 9.5-5.438m-19 32.59V28.354L2 22.914m38 0-9.5 5.439V39.21M2.57 12.37 21 22.935l18.43-10.564M21 44V22.914m19 8.368V14.547c0-.734-.196-1.454-.567-2.09a4.2 4.2 0 0 0-1.544-1.53L23.11 2.562a4.25 4.25 0 0 0-4.222 0L4.11 10.928a4.2 4.2 0 0 0-1.544 1.53A4.15 4.15 0 0 0 2 14.546v16.735c0 .733.196 1.454.567 2.089s.903 1.163 1.544 1.53l14.778 8.367a4.25 4.25 0 0 0 4.222 0L37.89 34.9a4.2 4.2 0 0 0 1.544-1.53c.37-.635.566-1.356.567-2.09"
            stroke="#4F39F6"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1 className="text-2xl md:text-3xl font-medium text-slate-900 max-w-2xl mt-5">
          Create Your Perfect Resume in Minutes.
        </h1>

        <p className="text-sm text-gray-500 max-w-lg mt-2">
          Design professional, ATS-friendly resumes with our AI Resume Builder. Save time, impress recruiters, and land your dream job effortlessly.
        </p>

        {/* Updated Button */}
        <button className="inline-flex items-center gap-2 px-8 py-2.5 mt-6 text-sm font-medium text-white bg-gradient-to-r from-indigo-700 to-indigo-600 rounded-lg hover:scale-105 transition duration-300 cursor-pointer">
          Get Started <ArrowRight className="size-4" />
        </button>
      </section>
    </div>
  );
};

export default CallToAction;
