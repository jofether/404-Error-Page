import React from 'react';

function App() {
  return (
    // CONTAINER: Full viewport centering
    // FUTURE BUG: Remove 'items-center justify-center' to break layout
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center">
      
      {/* 404 Graphic */}
      <h1 className="text-9xl font-extrabold text-white tracking-widest relative">
        404
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-20 blur-xl rounded-full transform scale-110"></div>
      </h1>

      <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <div className="mt-12 max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Oops! You seem to be lost in space.
        </h3>
        <p className="text-gray-400 mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-indigo-500/30">
            Go Home
          </button>
          <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition">
            Contact Support
          </button>
        </div>
      </div>

    </div>
  );
}

export default App;