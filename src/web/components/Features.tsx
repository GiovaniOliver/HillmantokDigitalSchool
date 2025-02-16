import React from 'react';

const FEATURES = [
  {
    title: 'Presence',
    description: 'Track your attendance and participation in real-time',
    icon: '👥'
  },
  {
    title: 'Assignment',
    description: 'Submit and manage your assignments efficiently',
    icon: '📝'
  },
  {
    title: 'Bill Payment',
    description: 'Easy and secure payment system for all fees',
    icon: '💳'
  },
  {
    title: 'Reviews',
    description: 'Get feedback and improve your performance',
    icon: '⭐'
  },
  {
    title: 'Final Exam',
    description: 'Prepare and take exams with confidence',
    icon: '📚'
  },
  {
    title: 'Events',
    description: 'Stay updated with campus events and activities',
    icon: '🎉'
  }
];

export const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-white mb-2">Features</h2>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Everything you need to manage your academic life in one place
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES.map((feature, index) => (
          <div 
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-colors"
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
      
      <button className="mt-12 border border-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-800/50 transition-colors">
        More Features
      </button>
    </section>
  );
}; 