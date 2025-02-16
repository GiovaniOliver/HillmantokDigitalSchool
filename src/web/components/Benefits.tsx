import React from 'react';

export const Benefits = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
          <img 
            src="/assets/student-portal.png" 
            alt="Student Portal" 
            className="relative z-10 w-full max-w-lg mx-auto"
          />
          
          <div className="absolute bottom-8 left-8 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 max-w-[200px]">
            <div className="flex items-center mb-2">
              <div className="bg-red-500 text-white text-xs px-2 py-1 rounded">Student Portal</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-white">60</div>
              <div className="w-16 h-16">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4CAF50"
                    strokeWidth="3"
                    strokeDasharray="60, 100"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
          <h2 className="text-3xl font-bold text-white mb-6">
            What kind of Benefit from this app
          </h2>
          <p className="text-gray-400 mb-8">
            Experience a seamless academic journey with our comprehensive student portal. 
            Track your progress, manage assignments, and stay connected with your academic community.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Real-time Progress Tracking</h3>
                <p className="text-gray-400">Monitor your academic performance instantly</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Time Management</h3>
                <p className="text-gray-400">Efficiently organize your study schedule</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Collaborative Learning</h3>
                <p className="text-gray-400">Connect and study with peers effectively</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 