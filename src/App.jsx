import React from 'react';

function App() {
  return (
    /* 5. LAYOUT BUG B: Missing 'items-center', breaking horizontal alignment */
    /* FIX: className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 text-center" */
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center p-4 text-center">
      
      <h1 className="text-9xl font-extrabold text-white tracking-widest relative">
        404
        {/* 6. LAYERS BUG B: Missing 'absolute' positioning on the glow effect */}
        {/* FIX: className="absolute top-0 left-0 w-full h-full bg-indigo-500 opacity-20 blur-xl rounded-full transform scale-110" */}
        <div className="top-0 left-0 w-full h-full bg-indigo-500 opacity-20 blur-xl rounded-full transform scale-110"></div>
      </h1>

      <div className="bg-indigo-600 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>

      <div className="mt-12 max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">
          Oops! You seem to be lost in space.
        </h3>
        {/* 7. SPACING BUG A: Overly large bottom margin pushes buttons off-screen */}
        {/* FIX: className="text-gray-400 mb-8" */ }
        <p className="text-gray-400 mb-[500px]">
          The page you are looking for might have been removed...
        </p>
        
        {/* 8. SPACING BUG B: Removed 'space-x-4', causing buttons to stick together */}
        {/* FIX: className="flex justify-center space-x-4" */}
        <div className="flex justify-center">
          
          {/* 9. COLOR BUG B: Breaking semantic color palette with a 'red' primary button */}
          {/* FIX: className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg" */}
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition">
            Go Home
          </button>

          {/* 10. TYPO BUG B: Misspelled Tailwind 'rounded' class */}
          {/* FIX: className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg" */}
          <button className="px-6 py-3 border border-gray-600 text-gray-300 font-medium roundeddd-lg">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;