import { useState } from 'react';
import { staffDirectory, artsPrograms, sourcesInfo } from '../data/staff-directory';

const StaffDirectory = () => {
  const [expandedCategory, setExpandedCategory] = useState(0); // Default first category open
  const [expandedStaff, setExpandedStaff] = useState({});
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const toggleCategory = (index) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  const toggleStaff = (categoryIndex, staffIndex) => {
    const key = `${categoryIndex}-${staffIndex}`;
    setExpandedStaff(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getCategoryColor = (index) => {
    const colors = [
      { bg: "bg-violet-600", hover: "hover:bg-violet-700", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-600" },
      { bg: "bg-blue-600", hover: "hover:bg-blue-700", light: "bg-blue-50", border: "border-blue-200", text: "text-blue-600" },
      { bg: "bg-teal-600", hover: "hover:bg-teal-700", light: "bg-teal-50", border: "border-teal-200", text: "text-teal-600" },
      { bg: "bg-purple-600", hover: "hover:bg-purple-700", light: "bg-purple-50", border: "border-purple-200", text: "text-purple-600" }
    ];
    return colors[index % colors.length];
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            P-CCS Art Staff Directory (2025)
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            A comprehensive overview of current art education staff and leadership at Plymouth-Canton Community Schools, 
            organized by role and school level.
          </p>
        </div>

        {/* Buttons for printing or sharing */}
        <div className="flex justify-end mb-6 gap-2">
          <button 
            onClick={() => window.print()} 
            className="flex items-center px-4 py-2 text-sm bg-white text-indigo-700 border border-indigo-200 rounded-lg shadow-sm hover:bg-indigo-50 transition-all hover:shadow"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>

        {/* Staff Directory Categories */}
        <div className="space-y-8">
          {staffDirectory.map((category, categoryIndex) => {
            const colors = getCategoryColor(categoryIndex);
            const isExpanded = expandedCategory === categoryIndex;
            
            return (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl">
                {/* Category Header */}
                <div 
                  className={`cursor-pointer ${colors.bg} px-6 py-4 text-white`}
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-4 bg-white/20 p-2 rounded-full">
                        {categoryIndex === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ) : categoryIndex === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </div>
                      <h4 className="font-bold text-lg md:text-xl">{category.category}</h4>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/90 text-sm font-medium mr-3 bg-white/10 px-3 py-1 rounded-full">{category.staff.length} staff</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Category Description */}
                {isExpanded && (
                  <div className={`${colors.light} px-6 py-3 border-b ${colors.border}`}>
                    <p className="text-gray-700">{category.description}</p>
                  </div>
                )}
                
                {/* Staff List */}
                {isExpanded && (
                  <div className="divide-y divide-gray-100">
                    {category.staff.map((person, staffIndex) => {
                      const staffKey = `${categoryIndex}-${staffIndex}`;
                      const isStaffExpanded = expandedStaff[staffKey];
                      
                      return (
                        <div key={staffIndex} className="p-4 md:p-5">
                          <div 
                            className={`transition-all cursor-pointer ${isStaffExpanded ? 'bg-gray-50 rounded-t-xl' : 'hover:bg-gray-50 rounded-xl'} p-4`}
                            onClick={() => toggleStaff(categoryIndex, staffIndex)}
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="flex items-center">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center mr-4 text-white font-medium shadow-md ${colors.bg}`}>
                                  {getInitial(person.name)}
                                </div>
                                <div>
                                  <h5 className="font-bold text-gray-900 text-lg">{person.name}</h5>
                                  <p className="text-gray-600">{person.position}</p>
                                </div>
                              </div>
                              
                              <div className="mt-3 md:mt-0 flex items-center">
                                {person.school && (
                                  <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full mr-3">
                                    {person.school}
                                  </span>
                                )}
                                {person.schools && (
                                  <span className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full mr-3">
                                    {person.schools}
                                  </span>
                                )}
                                <div className={`transition-transform duration-300 ${isStaffExpanded ? 'rotate-180' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Staff Details - Ultra compact redesign */}
                          {isStaffExpanded && (
                            <div className="rounded-b-xl overflow-hidden max-w-2xl mx-auto">
                              <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
                                {/* Compact header */}
                                <div className={`bg-indigo-900 py-2.5 px-3`}>
                                  <div className="flex items-center">
                                    <div className="bg-white/20 rounded-full p-1.5 mr-2.5">
                                      <svg className="h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <h3 className="text-white text-base font-bold">Professional Information</h3>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Ultra Compact content layout */}
                                <div className="p-3 space-y-2.5">
                                  {person.department && (
                                    <div className="flex items-start bg-gray-50 rounded-md p-2 border border-gray-200">
                                      <div className={`p-1.5 rounded-md mr-2 ${colors.bg} text-white flex-shrink-0`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Department</div>
                                        <div className="text-gray-800 font-medium text-sm">{person.department}</div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.role && (
                                    <div className="flex items-start bg-purple-50 rounded-md p-2 border border-purple-100">
                                      <div className="p-1.5 rounded-md mr-2 bg-purple-600 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Role</div>
                                        <div className="text-gray-800 font-medium text-sm">{person.role}</div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.email && (
                                    <div className="flex items-start bg-blue-50 rounded-md p-2 border border-blue-100">
                                      <div className="p-1.5 rounded-md mr-2 bg-blue-600 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide">Email</div>
                                        <a 
                                          href={`mailto:${person.email}`}
                                          className="text-blue-600 font-medium hover:underline inline-flex items-center text-sm"
                                        >
                                          {person.email}
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                          </svg>
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.specialization && (
                                    <div className="flex items-start bg-amber-50 rounded-md p-2 border border-amber-100">
                                      <div className="p-1.5 rounded-md mr-2 bg-amber-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Specialization</div>
                                        <div className="text-gray-800 font-medium text-sm">{person.specialization}</div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.education && (
                                    <div className="flex items-start bg-indigo-50 rounded-md p-2 border border-indigo-100">
                                      <div className="p-1.5 rounded-md mr-2 bg-indigo-600 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wide">Education</div>
                                        <div className="text-gray-800 font-medium text-sm">{person.education}</div>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.note && (
                                    <div className="flex items-start bg-teal-50 rounded-md p-2 border border-teal-100">
                                      <div className="p-1.5 rounded-md mr-2 bg-teal-600 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <div className="text-xs font-semibold text-teal-600 uppercase tracking-wide">Note</div>
                                        <div className="text-gray-800 font-medium text-sm">{person.note}</div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Status Bar - ultra compact */}
                                  {person.status && (
                                    <div className="mt-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-1.5 px-2 rounded-md flex items-center text-xs">
                                      <div className="bg-white/20 p-0.5 rounded-full mr-1.5">
                                        <svg className="h-2.5 w-2.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                      <div className="flex items-center">
                                        <span className="font-bold uppercase mr-1.5">Status:</span>
                                        <span className="font-medium">{person.status}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Additional Information Toggle */}
        <div className="mt-12">
          <button 
            onClick={() => setShowAdditionalInfo(!showAdditionalInfo)} 
            className="flex items-center w-full justify-between p-5 bg-white rounded-xl border border-gray-200 hover:bg-indigo-50 transition-colors shadow-md hover:shadow-lg"
          >
            <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Additional Department Information
            </span>
            <div className={`flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 ${showAdditionalInfo ? 'bg-indigo-200' : ''}`}>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-indigo-600 transition-transform duration-300 ${showAdditionalInfo ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {/* Additional Information Content */}
          {showAdditionalInfo && (
            <div className="mt-6 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                Visual and Performing Arts Programs
              </h3>
              <p className="text-gray-700 text-lg mb-8">{artsPrograms.description}</p>
              
              {/* Program Levels */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-indigo-800 mb-5">Program Levels</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {artsPrograms.levels.map((level, index) => (
                    <div key={index} className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100 shadow-md">
                      <h5 className="font-bold text-indigo-900 mb-3 text-lg">{level.level}</h5>
                      <p className="text-gray-700 mb-4">{level.description}</p>
                      {level.details && (
                        <ul className="space-y-2">
                          {level.details.map((detail, idx) => (
                            <li key={idx} className="text-gray-600 flex items-start">
                              <span className="inline-block h-2 w-2 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Events */}
              <div className="mb-10">
                <h4 className="text-xl font-bold text-indigo-800 mb-5">{artsPrograms.events.title}</h4>
                <div className="bg-white rounded-xl border border-indigo-100 shadow-md p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {artsPrograms.events.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-3 p-2 bg-indigo-100 rounded-full text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <span className="text-gray-700 mt-0.5">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Structure and Development */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100 shadow-md">
                  <h4 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {artsPrograms.structure.title}
                  </h4>
                  <ul className="space-y-3">
                    {artsPrograms.structure.items.map((item, index) => (
                      <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                        <span className="inline-block h-6 w-6 rounded-full bg-purple-100 mr-3 flex items-center justify-center text-purple-600 flex-shrink-0 font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 shadow-md">
                  <h4 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {artsPrograms.development.title}
                  </h4>
                  <p className="text-gray-700 mb-4">{artsPrograms.development.description}</p>
                  <ul className="space-y-3">
                    {artsPrograms.development.items.map((item, index) => (
                      <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                        <span className="inline-block h-6 w-6 rounded-full bg-blue-100 mr-3 flex items-center justify-center text-blue-600 flex-shrink-0 font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sources and Verification */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Sources and Verification
                </h4>
                <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100 shadow-md">
                  <p className="text-gray-700 mb-4 font-medium">Information in this directory was compiled and verified from:</p>
                  <ul className="space-y-2 mb-6">
                    {sourcesInfo.sources.map((source, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <div className="mr-3 p-1 bg-indigo-100 rounded-full text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {source}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-gray-700 mb-4 font-medium">{sourcesInfo.emailFormat}</p>
                  
                  <p className="text-gray-700 mt-6 mb-3 font-medium">Limitations in verification include:</p>
                  <ul className="space-y-2 mb-6">
                    {sourcesInfo.limitations.map((limitation, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <div className="mr-3 p-1 bg-indigo-100 rounded-full text-indigo-600">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl text-white mt-6">
                    <p className="font-bold mb-4">{sourcesInfo.contact.note}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-white/20 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <span className="font-medium">{sourcesInfo.contact.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="p-2 bg-white/20 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <a href={`mailto:${sourcesInfo.contact.email}`} className="text-white font-medium hover:underline">
                          {sourcesInfo.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <div className="p-2 bg-white/20 rounded-full mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <span className="font-medium">{sourcesInfo.contact.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default StaffDirectory; 