import "./App.css";
import ArtifactCode from "./ArtifactCode";
import StaffDirectory from "./components/StaffDirectory";
import { useState } from "react";

function App() {
  const [showStaffDirectory, setShowStaffDirectory] = useState(false);
  
  return (
    <>
      {showStaffDirectory ? (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans">
          <header className="bg-indigo-600 text-white py-4 sticky top-0 z-40 shadow-md">
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
              <h1 className="text-xl font-bold">P-CCS K-12 Art Show</h1>
              <button 
                onClick={() => setShowStaffDirectory(false)}
                className="px-4 py-2 bg-white text-indigo-700 rounded-md hover:bg-indigo-50 transition-colors text-sm font-medium"
              >
                Back to Main Site
              </button>
            </div>
          </header>
          <StaffDirectory />
        </div>
      ) : (
        <div>
          <ArtifactCode />
          <div className="fixed bottom-6 right-6 z-50">
            <button 
              onClick={() => setShowStaffDirectory(true)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center transition-transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              View Art Staff Directory
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
