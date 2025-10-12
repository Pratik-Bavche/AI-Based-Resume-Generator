const Features = () => {
  return (
    <>
            <h1 className="text-3xl font-semibold text-center mx-auto">Build your resume</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
                Everything you need to create, customize, and optimize your professional resume effortlessly.
            </p>
            <div className="flex items-center justify-center flex-wrap gap-6 mt-20 px-4 md:px-0">
                {/* Feature 1 */}
                <div className="flex flex-col text-center items-center justify-between rounded-xl p-6 border border-blue-200 gap-6 max-w-sm h-72 mb-8 cursor-pointer hover:-translate-y-1 transition duration-300">
                    <div className="p-6 aspect-square bg-blue-100 rounded-full flex items-center justify-center">
                        {/* AI Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#1E40AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 2v20m6-18v16M6 4v16"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">AI Resume Builder</h3>
                        <p className="text-sm text-slate-600">Generate professional resumes instantly using AI-powered templates and suggestions.</p>
                    </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex flex-col text-center items-center justify-between rounded-xl p-6 border border-indigo-200 gap-6 max-w-sm h-72 mb-8 cursor-pointer hover:-translate-y-1 transition duration-300">
                    <div className="p-6 aspect-square bg-indigo-100 rounded-full flex items-center justify-center">
                        {/* Document Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                            <path d="M14 2v6h6"/>
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Job-Ready Format</h3>
                        <p className="text-sm text-slate-600">Ensure your resume is structured and formatted to impress recruiters and get shortlisted faster..</p>
                    </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex flex-col text-center items-center justify-between rounded-xl p-6 border border-indigo-200 gap-6 max-w-sm h-72 mb-8 cursor-pointer hover:-translate-y-1 transition duration-300">
                    <div className="p-6 aspect-square bg-indigo-100 rounded-full flex items-center justify-center">
                        {/* Customization Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                            <path d="M12 20h9"/>
                            <path d="M16 4l4 4-8 8-4-4z"/>
                        </svg>
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-semibold text-slate-700">Customizable Layouts</h3>
                        <p className="text-sm text-slate-600">Easily modify sections, styles, and colors to make your resume truly personal and unique.</p>
                    </div>
                </div>
            </div>
    </>
  );
};

export default Features;
