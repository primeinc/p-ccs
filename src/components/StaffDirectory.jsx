import { useState } from 'react';
import { staffDirectory, artsPrograms, sourcesInfo } from '../data/staff-directory';

const StaffDirectory = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
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
      { bg: "bg-indigo-600", hover: "hover:bg-indigo-700", light: "bg-indigo-50", border: "border-indigo-200" },
      { bg: "bg-blue-600", hover: "hover:bg-blue-700", light: "bg-blue-50", border: "border-blue-200" },
      { bg: "bg-teal-600", hover: "hover:bg-teal-700", light: "bg-teal-50", border: "border-teal-200" },
      { bg: "bg-purple-600", hover: "hover:bg-purple-700", light: "bg-purple-50", border: "border-purple-200" }
    ];
    return colors[index % colors.length];
  };

  const getInitial = (name) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <section className="my-8 md:my-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-3">P-CCS Art Staff Directory (2025)</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of current art education staff and leadership at Plymouth-Canton Community Schools, 
            organized by role and school level.
          </p>
        </div>

        {/* Buttons for printing or sharing */}
        <div className="flex justify-end mb-4 gap-2">
          <button 
            onClick={() => window.print()} 
            className="flex items-center px-3 py-1.5 text-sm bg-white text-indigo-700 border border-indigo-200 rounded-md hover:bg-indigo-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print
          </button>
        </div>

        {/* Staff Directory Categories */}
        <div className="space-y-6">
          {staffDirectory.map((category, categoryIndex) => {
            const colors = getCategoryColor(categoryIndex);
            const isExpanded = expandedCategory === categoryIndex;
            
            return (
              <div key={categoryIndex} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                {/* Category Header */}
                <div 
                  className={`cursor-pointer ${colors.bg} px-4 py-3 text-white`}
                  onClick={() => toggleCategory(categoryIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 bg-white/20 p-2 rounded-full">
                        {categoryIndex === 0 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ) : categoryIndex === 1 ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        )}
                      </div>
                      <h4 className="font-semibold text-base md:text-lg">{category.category}</h4>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white/80 text-sm mr-2">{category.staff.length} staff</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-5 w-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
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
                  <div className={`${colors.light} px-4 py-2 border-b ${colors.border}`}>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                )}
                
                {/* Staff List */}
                {isExpanded && (
                  <div className="divide-y divide-gray-100">
                    {category.staff.map((person, staffIndex) => {
                      const staffKey = `${categoryIndex}-${staffIndex}`;
                      const isStaffExpanded = expandedStaff[staffKey];
                      
                      return (
                        <div key={staffIndex} className="p-4">
                          <div 
                            className={`transition-all cursor-pointer ${isStaffExpanded ? 'bg-gray-50 rounded-t-lg' : 'hover:bg-gray-50 rounded-lg'} p-3`}
                            onClick={() => toggleStaff(categoryIndex, staffIndex)}
                          >
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                              <div className="flex items-center">
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white font-medium shadow-sm ${colors.bg}`}>
                                  {getInitial(person.name)}
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900">{person.name}</h5>
                                  <p className="text-sm text-gray-600">{person.position}</p>
                                </div>
                              </div>
                              
                              <div className="mt-2 md:mt-0 flex items-center">
                                {person.school && (
                                  <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-2">
                                    {person.school}
                                  </span>
                                )}
                                {person.schools && (
                                  <span className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full mr-2">
                                    {person.schools}
                                  </span>
                                )}
                                <div className={`transition-transform ${isStaffExpanded ? 'rotate-180' : ''}`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Staff Details */}
                          {isStaffExpanded && (
                            <div className="bg-gray-50 p-4 rounded-b-lg border-t border-gray-100">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  {person.department && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Department</p>
                                        <p className="text-sm">{person.department}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.email && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Email</p>
                                        <a href={`mailto:${person.email}`} className="text-sm text-indigo-600 hover:underline">
                                          {person.email}
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.specialization && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Specialization</p>
                                        <p className="text-sm">{person.specialization}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="space-y-3">
                                  {person.role && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Role</p>
                                        <p className="text-sm">{person.role}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.education && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Education</p>
                                        <p className="text-sm">{person.education}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {person.note && (
                                    <div className="flex items-start">
                                      <div className="mt-0.5 mr-3 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                      </div>
                                      <div>
                                        <p className="text-xs text-gray-500">Note</p>
                                        <p className="text-sm">{person.note}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              {/* Status */}
                              {person.status && (
                                <div className="mt-3 pt-3 border-t border-gray-100">
                                  <div className="flex items-start">
                                    <div className="mt-0.5 mr-3 text-green-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                      </svg>
                                    </div>
                                    <div>
                                      <p className="text-xs text-gray-500">Status</p>
                                      <p className="text-sm text-green-600">{person.status}</p>
                                    </div>
                                  </div>
                                </div>
                              )}
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
        <div className="mt-8">
          <button 
            onClick={() => setShowAdditionalInfo(!showAdditionalInfo)} 
            className="flex items-center w-full justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          >
            <span className="font-medium text-indigo-700">
              Additional Department Information
            </span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 text-indigo-500 transition-transform ${showAdditionalInfo ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {/* Additional Information Content */}
          {showAdditionalInfo && (
            <div className="mt-4 bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">Visual and Performing Arts Programs</h3>
              <p className="text-gray-700 mb-6">{artsPrograms.description}</p>
              
              {/* Program Levels */}
              <div className="mb-6">
                <h4 className="text-lg font-medium text-indigo-700 mb-3">Program Levels</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {artsPrograms.levels.map((level, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h5 className="font-medium text-indigo-900 mb-2">{level.level}</h5>
                      <p className="text-sm text-gray-700">{level.description}</p>
                      {level.details && (
                        <ul className="mt-2 space-y-1">
                          {level.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
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
              <div className="mb-6">
                <h4 className="text-lg font-medium text-indigo-700 mb-3">{artsPrograms.events.title}</h4>
                <ul className="space-y-2">
                  {artsPrograms.events.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Structure and Development */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-lg font-medium text-indigo-700 mb-3">{artsPrograms.structure.title}</h4>
                  <ul className="space-y-2">
                    {artsPrograms.structure.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="text-lg font-medium text-indigo-700 mb-3">{artsPrograms.development.title}</h4>
                  <p className="text-gray-700 text-sm mb-3">{artsPrograms.development.description}</p>
                  <ul className="space-y-2">
                    {artsPrograms.development.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Sources and Verification */}
              <div className="mt-6">
                <h4 className="text-lg font-medium text-indigo-700 mb-3">Sources and Verification</h4>
                <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <p className="text-sm text-gray-700 mb-3">Information in this directory was compiled and verified from:</p>
                  <ul className="space-y-1 mb-4">
                    {sourcesInfo.sources.map((source, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {source}
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-sm text-gray-700 mb-2">{sourcesInfo.emailFormat}</p>
                  
                  <p className="text-sm text-gray-700 mt-4 mb-2">Limitations in verification include:</p>
                  <ul className="space-y-1 mb-4">
                    {sourcesInfo.limitations.map((limitation, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 flex-shrink-0"></span>
                        {limitation}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-indigo-50 p-4 rounded-lg mt-3">
                    <p className="text-sm text-indigo-800 font-medium mb-2">{sourcesInfo.contact.note}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        {sourcesInfo.contact.phone}
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href={`mailto:${sourcesInfo.contact.email}`} className="text-indigo-600 hover:underline">
                          {sourcesInfo.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {sourcesInfo.contact.address}
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