import { useState } from 'react';
import React from 'react';

// KeyContacts Component
const KeyContacts = () => {
  const [expandedContact, setExpandedContact] = useState(null);
  const [hoveredInsight, setHoveredInsight] = useState(null);
  
  const contacts = [
    {
      category: "District Leadership",
      categoryBg: "bg-gradient-to-r from-indigo-600 to-indigo-700",
      categoryText: "text-white",
      individuals: [
        {
          name: "Cathie Williams",
          role: "K-12 Curriculum Coordinator for Visual and Performing Arts",
          email: "catherine.williams@pccsk12.com",
          description: "As the district\'s arts curriculum coordinator, Ms. Williams oversees all visual arts programming and likely plays a central role in organizing the K-12 Art Show. She maintains relationships with all art teachers and influences arts education standards across P-CCS."
        },
        {
          name: "Beth Rayl",
          role: "Chief Academic Officer",
          description: "Ms. Rayl oversees academic programs district-wide, including arts education. Cathie Williams reports to her in the organizational structure."
        },
        {
          name: "Dr. Sean Jackman",
          role: "Arts Academy Leader",
          email: "sean.jackman@pccsk12.com",
          description: "Dr. Jackman leads the P-CEP Arts Academy program and may influence district-wide arts initiatives."
        }
      ]
    },
    {
      category: "Art Teachers",
      categoryBg: "bg-gradient-to-r from-teal-600 to-teal-700",
      categoryText: "text-white",
      individuals: [
        {
          name: "Jennifer Wolf",
          role: "Elementary Art Teacher",
          email: "jennifer.wolf@pccsk12.com",
          description: "Described as \'one of the most creative, caring, knowledgeable teachers\' with experience teaching art to K-2 students. Ms. Wolf has a background in photography and emphasizes creating a \'positive atmosphere\' for student growth."
        },
        {
          name: "Anastasia Vanderkloot",
          role: "Elementary Art Teacher",
          schools: "Bentley & Field Elementary",
          email: "anastasia.vanderkloot@pccsk12.com"
        },
        {
          name: "Lisa Hedrick",
          role: "Art Teacher",
          school: "West Middle School",
          email: "lisa.hedrick@pccsk12.com"
        },
        {
          name: "Other P-CCS Art Teachers",
          description: "The district employs full-time, certified visual arts teachers at all elementary and middle schools. All staff follow the standard email format: firstname.lastname@pccsk12.com"
        }
      ]
    }
  ];

  const toggleContact = (groupIndex, contactIndex) => {
    const contactId = `${groupIndex}-${contactIndex}`;
    setExpandedContact(expandedContact === contactId ? null : contactId);
  };

  return (
    <section className="my-8 md:my-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 to-transparent h-64 rounded-3xl -z-10"></div>
      <SectionTitle>Key Contacts & Influence Network</SectionTitle>
      
      <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-lg p-4 md:p-6 border border-indigo-100">
        <div className="mb-6 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Understanding the key decision-makers in the P-CCS art education network can help students and parents 
            navigate the art show process more effectively. Here are the most influential figures identified through research.
          </p>
          <div className="mt-4 inline-flex items-center text-xs text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Tip: Click on a contact card to expand details
          </div>
        </div>
        
        <div className="space-y-6">
          {contacts.map((group, groupIndex) => (
            <div key={groupIndex} className="rounded-xl overflow-hidden shadow-md border border-gray-200 transform transition-all duration-300 hover:shadow-lg bg-white backdrop-blur-sm bg-opacity-95">
              <div className={`${group.categoryBg} px-4 py-3 flex items-center`}>
                <div className="mr-3 bg-white/20 p-2 rounded-full">
                  {group.category === "District Leadership" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <h4 className={`font-semibold text-base md:text-lg ${group.categoryText}`}>{group.category}</h4>
              </div>
              <div className="p-4 md:p-5 bg-white divide-y divide-gray-100">
                {group.individuals.map((contact, contactIndex) => {
                  const contactId = `${groupIndex}-${contactIndex}`;
                  const isExpanded = expandedContact === contactId;
                  
                  return (
                    <div 
                      key={contactIndex} 
                      className={`group transition-all duration-300 ${contactIndex > 0 ? 'pt-4 mt-4' : ''}`}
                    >
                      <div 
                        onClick={() => toggleContact(groupIndex, contactIndex)}
                        className={`cursor-pointer p-4 rounded-lg ${isExpanded ? 'bg-indigo-50 shadow-md ring-1 ring-indigo-200' : 'bg-gray-50 hover:bg-indigo-50/50'} border border-gray-100 transition-all duration-300 transform ${isExpanded ? 'scale-[1.01]' : 'hover:scale-[1.005]'}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex items-center">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-3 text-white font-medium shadow-md ${group.category === "District Leadership" ? 'bg-gradient-to-br from-indigo-600 to-indigo-700' : 'bg-gradient-to-br from-teal-600 to-teal-700'}`}>
                              {contact.name.charAt(0)}
                            </div>
                            <h5 className="font-bold text-indigo-900 text-lg md:text-xl">{contact.name}</h5>
                          </div>
                          
                          <div className="mt-2 md:mt-0 flex items-center">
                            {contact.role && 
                              <div className="inline-flex items-center bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium mr-2">
                                {contact.role}
                              </div>
                            }
                            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 group-hover:text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                          <div className="space-y-3">
                            {contact.schools && (
                              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                                <div>
                                  <div className="text-xs text-indigo-600 font-medium uppercase">Schools</div>
                                  <div className="text-sm text-gray-700">{contact.schools}</div>
                                </div>
                              </div>
                            )}
                            
                            {contact.school && (
                              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <div>
                                  <div className="text-xs text-indigo-600 font-medium uppercase">School</div>
                                  <div className="text-sm text-gray-700">{contact.school}</div>
                                </div>
                              </div>
                            )}
                            
                            {contact.email && (
                              <div className="flex items-center bg-white p-3 rounded-lg shadow-sm hover:shadow transition-shadow duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                  <div className="text-xs text-indigo-600 font-medium uppercase">Email</div>
                                  <a href={`mailto:${contact.email}`} className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline transition-colors">
                                    {contact.email}
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {contact.description && (
                            <div className="bg-white p-4 rounded-lg shadow-sm border border-indigo-100 hover:shadow transition-all duration-200">
                              <div className="text-xs text-indigo-600 font-medium uppercase mb-1">About</div>
                              <div className="text-sm text-gray-700 leading-relaxed">
                                {contact.description}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-5 shadow-md border border-indigo-200">
          <div className="flex items-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h4 className="uppercase text-sm tracking-wider font-bold text-indigo-700">INFLUENCE NETWORK STRATEGIC INSIGHT</h4>
          </div>
          
          <p className="text-sm text-indigo-900 mb-4 font-medium">
            Understanding this network of influence is crucial for strategic engagement:
          </p>
          
          <ul className="space-y-3">
            {[
              "Art teachers are the primary gateway to nomination - they select which student work is submitted to the show",
              "Cathie Williams, as the district arts coordinator, likely influences overall selection guidelines and priorities",
              "School PTAs/PTOs may include arts committee members who advocate for visual arts",
              "Building positive relationships with these key figures can increase a student's chances of having work selected"
            ].map((insight, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-3 bg-white/50 p-3 rounded-lg border border-indigo-100 shadow-sm hover:shadow-md hover:bg-white/80 transition-all duration-200 transform hover:translate-x-1"
                onMouseEnter={() => setHoveredInsight(idx)}
                onMouseLeave={() => setHoveredInsight(null)}
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className={`h-6 w-6 rounded-full flex items-center justify-center text-white font-medium text-xs transition-all duration-300 ${hoveredInsight === idx ? 'bg-indigo-700 scale-110' : 'bg-gradient-to-br from-indigo-600 to-indigo-700'}`}>
                    {idx + 1}
                  </div>
                </div>
                <span className="text-sm text-gray-800">{insight}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-6 bg-white/60 p-4 rounded-lg border border-purple-100 shadow-sm">
            <div className="flex items-center text-purple-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-xs font-semibold">PRO TIP</p>
            </div>
            <p className="text-sm text-gray-700 mt-1">
              Consider attending P-CCS arts events throughout the year to establish connections with key decision-makers in a natural, supportive context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white font-sans">
      <Header />
      <StickyMobileHeader />
      
      <main className="container mx-auto px-4 md:px-8 pt-16 md:pt-24 pb-20">
        <article className="art-show-content">
          <Overview />
          <EventDetails />
          <Timeline />
          
          <section className="participation-info">
            <Participation />
          </section>
          
          <section className="judging-info">
            <JudgingProcess />
          </section>
          
          <section className="strategy-info">
            <StrategyByAge />
            <StrategicApproaches />
          </section>
          
          <section className="media-info">
            <MediaSelection />
          </section>
          
          <section className="guidelines-info">
            <SubmissionGuidelines />
          </section>
          
          <section className="gallery-info">
            <Gallery />
          </section>
          
          <section className="faq-info">
            <FAQ />
          </section>
          
          <section className="success-checklist">
            <StudentSuccessChecklist />
          </section>
          
          <section className="contacts-info">
            <KeyContacts />
          </section>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

// Header Component
const Header = () => {
  return (
    <div className="bg-indigo-600 text-white py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-indigo-700 opacity-30">
        {/* Removed non-existent placeholder image that was causing 404 error */}
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <span className="text-indigo-200 uppercase tracking-wider mb-1">Plymouth-Canton Community Schools Presents</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Spotlight on Student Creativity</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6">The Annual P-CCS K-12 Art Show</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Badge icon="calendar">May 17, 2025</Badge>
            <Badge icon="clock">11:30 AM - 4:00 PM</Badge>
            <Badge icon="location">Salem High School</Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

// Sticky Header for Mobile (New)
const StickyMobileHeader = () => {
  return (
    <div className="md:hidden sticky top-0 z-40 bg-indigo-700 text-white py-2 px-4 shadow-md">
      <h2 className="text-lg font-semibold text-center truncate">P-CCS K-12 Art Show</h2>
    </div>
  );
}

// Badge Component
const Badge = ({ children, icon }) => {
  let iconElement;
  
  switch(icon) {
    case 'calendar':
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      );
      break;
    case 'clock':
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
      break;
    case 'location':
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      );
      break;
    default:
      iconElement = null;
  }
  
  return (
    <div className="inline-flex items-center bg-white bg-opacity-20 text-white px-4 py-2 rounded-full">
      {iconElement && <span className="mr-2">{iconElement}</span>}
      <span>{children}</span>
    </div>
  );
};

// Section Title Component
const SectionTitle = ({ children, id }) => {
  return (
    <h3 className="text-xl md:text-3xl font-bold text-indigo-800 mb-4 md:mb-6 pb-2 text-left md:text-center md:border-b-2 md:border-indigo-200" id={id}>
      {children}
    </h3>
  );
};

// Overview Component
const Overview = () => {
  return (
    <section className="my-12" aria-labelledby="overview-title">
      <SectionTitle id="overview-title">Event Overview</SectionTitle>
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The <strong>Annual P-CCS K-12 Art Show</strong> is a vibrant celebration of student artistic achievement across the Plymouth-Canton Community Schools district. This showcase features approximately 2,000 teacher-nominated artworks from students in kindergarten through 12th grade, offering the community an opportunity to engage with creative work representing all district schools. With juried awards, live art demonstrations, and displays organized by age level, this event reflects the district's strong commitment to arts education.
        </p>
        
        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-800 mb-2">P-CCS Learner Profile Values</h4>
          <p className="text-gray-700 mb-3">The district's commitment to arts education is aligned with its Learner Profile, which values:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
            <div className="bg-white p-2 rounded shadow-sm text-indigo-700 font-medium">Innovator</div>
            <div className="bg-white p-2 rounded shadow-sm text-indigo-700 font-medium">Critical Thinker</div>
            <div className="bg-white p-2 rounded shadow-sm text-indigo-700 font-medium">Communicator</div>
            <div className="bg-white p-2 rounded shadow-sm text-indigo-700 font-medium">Ethical & Global Citizen</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Event Details Component
const EventDetails = () => {
  const eventLocation = "Salem High School Cafeteria, 46181 Joy Rd, Canton, MI 48187";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(eventLocation)}`;
  const [isCalendarDropdownOpen, setIsCalendarDropdownOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCalendarDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Device detection for calendar suggestions
  const isAppleDevice = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod|Macintosh|Mac OS/.test(userAgent);
  };

  // Calendar options
  const calendarOptions = [
    {
      name: 'Apple Calendar',
      icon: 'apple',
      action: () => window.location.href = '/p-ccs/PCCS_Art_Show.ics',
      primary: isAppleDevice(),
    },
    {
      name: 'Google Calendar',
      icon: 'google',
      action: () => {
        const startTime = "20250517T113000";
        const endTime = "20250517T160000";
        const title = encodeURIComponent("P-CCS K-12 Art Show");
        const details = encodeURIComponent("Annual P-CCS K-12 Art Show. Location: Salem High School Cafeteria.");
        const location = encodeURIComponent(eventLocation);
        window.open(`https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`, '_blank');
      },
      primary: !isAppleDevice(),
    },
    {
      name: 'Outlook',
      icon: 'outlook',
      action: () => window.location.href = '/p-ccs/PCCS_Art_Show.ics',
      primary: false,
    },
    {
      name: 'Download .ics',
      icon: 'download',
      action: () => window.location.href = '/p-ccs/PCCS_Art_Show.ics',
      primary: false,
    }
  ];

  // Get primary calendar option based on device
  const primaryOption = calendarOptions.find(option => option.primary) || calendarOptions[0];

  // Icon components
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'apple':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        );
      case 'google':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5">
            <path d="M12.545 12.151L12.254 12h.291zm1.334-1.713l.022.038c.386.733.578 1.482.578 2.256v.97c.84.08.713.132.713.213v1.438a.715.715 0 01-.713.713h-4.949a.716.716 0 01-.714-.713v-1.438c0-.081.029-.133.713-.213v-.97c0-.775.194-1.525.581-2.258l.022-.038A4.265 4.265 0 0112 8.744a4.266 4.266 0 011.879 1.694zM12.545 12.151zm0 0L12.254 12M10 18.5h4M10 20h4"/>
          </svg>
        );
      case 'outlook':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1.5">
            <path d="M14.5 12.59l.9 2.38a.23.23 0 0 0 .47 0l.9-2.38 3.18-2.84a.23.23 0 0 0-.15-.42h-2.77a.23.23 0 0 0-.22.15L16 11.62l-.77-2.14a.23.23 0 0 0-.21-.15h-2.78a.23.23 0 0 0-.15.42l3.18 2.84z"/>
            <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-3 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4-4h-8v-1h8zm0-2h-8v-1h8z"/>
          </svg>
        );
      case 'download':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        );
      case 'calendar':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
            <line x1="12" y1="14" x2="12" y2="18"></line>
            <line x1="10" y1="16" x2="14" y2="16"></line>
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
        );
    }
  };

  return (
    <section className="my-8 md:my-12" aria-labelledby="event-details-title">
      <SectionTitle id="event-details-title">Event Details</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DetailCard 
          title="Location" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          }
        >
          <p className="text-gray-700">Salem High School Cafeteria</p>
          <a href={mapLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline text-sm">
            46181 Joy Rd, Canton, MI 48187
          </a>
        </DetailCard>
        
        <DetailCard 
          title="Date & Time" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          }
        >
          <p className="text-gray-700">Saturday, May 17, 2025</p>
          <p className="text-gray-600 text-sm">11:30 AM - 3:30 PM (Exhibition)</p>
          <p className="text-gray-600 text-sm">3:30 PM - 4:00 PM (Awards)</p>
          
          <div className="relative mt-3" ref={dropdownRef}>
            {/* Single Calendar Button that opens dropdown */}
            <button 
              onClick={() => setIsCalendarDropdownOpen(!isCalendarDropdownOpen)}
              className="w-full flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Add to Calendar
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1.5">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isCalendarDropdownOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {calendarOptions.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        option.action();
                        setIsCalendarDropdownOpen(false);
                      }}
                      className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center"
                    >
                      {getIcon(option.icon)}
                      {option.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DetailCard>
        
        <DetailCard 
          title="Admission" 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
              <line x1="1" y1="10" x2="23" y2="10"></line>
            </svg>
          }
        >
          <p className="text-gray-700">Open to the public</p>
          <p className="text-gray-600 text-sm">Suggested donation: $5-$10 per family</p>
          <p className="text-gray-500 text-xs">Proceeds support art programs</p>
        </DetailCard>
      </div>
    </section>
  );
};

// Detail Card Component
const DetailCard = ({ title, icon, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
      <div className="text-indigo-600 mb-3">
        {icon}
      </div>
      <h4 className="text-xl font-semibold text-indigo-800 mb-3">{title}</h4>
      <div>
        {children}
      </div>
    </div>
  );
};

// Timeline Component
const Timeline = () => {
  const timelineEvents = [
    { time: "11:30 AM", title: "Exhibition Opens", description: "Doors open to the public at Salem High School Cafeteria" },
    { time: "12:00 PM", title: "Live Art Demonstrations Begin", description: "High school students showcase their skills in various art forms including drawing, painting, ceramics, photography, metals, fashion, and digital art" },
    { time: "3:00 PM", title: "Live Demonstrations End", description: "Last chance to see high school students creating art live" },
    { time: "3:30 PM", title: "Exhibition Closes", description: "Main viewing of artwork concludes" },
    { time: "3:30 PM - 4:00 PM", title: "Awards Ceremony", description: "Recognition of students who received juried ribbons from \"celebrity judges\"", highlight: true }
  ];

  return (
    <section className="my-8 md:my-12" aria-labelledby="schedule-title">
      <SectionTitle id="schedule-title">Event Schedule</SectionTitle>
      {/* Mobile Timeline (Simplified Stacked) */}
      <div className="md:hidden space-y-4">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`p-4 rounded-lg shadow-md ${event.highlight ? 'bg-indigo-100 border-l-4 border-indigo-500' : 'bg-white'}`}>
            <p className={`text-sm font-semibold ${event.highlight ? 'text-indigo-700' : 'text-indigo-500'}`}>{event.time}</p>
            <h4 className={`mt-1 font-bold ${event.highlight ? 'text-indigo-800' : 'text-indigo-700'} text-md`}>{event.title}</h4>
            <p className="text-xs text-gray-600 mt-1">{event.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop Timeline (Original Zigzag) */}
      <div className="hidden md:block relative">
        <div className="absolute h-full w-0.5 bg-indigo-300 left-1/2 transform -translate-x-1/2 top-0"></div>
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} time={event.time} align={index % 2 === 0 ? 'left' : 'right'} highlight={event.highlight}>
              <h4 className={`font-bold ${event.highlight ? 'text-indigo-800' : 'text-indigo-700'} text-lg`}>{event.title}</h4>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Item Component
const TimelineItem = ({ time, align, children, highlight }) => {
  const isLeft = align === 'left';
  
  return (
    <div className={`flex flex-col md:flex-row items-start ${isLeft ? '' : 'md:flex-row-reverse'} relative`}>
      <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 ${highlight ? 'bg-indigo-700 scale-110' : 'bg-indigo-600'} rounded-full mt-1.5 ring-4 ring-white"></div>
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'} pb-4 md:pb-0 pl-16 md:pl-0 md:text-sm`}>
        <div className={`md:${isLeft ? 'text-right' : 'text-left'} font-semibold ${highlight ? 'text-indigo-700' : 'text-indigo-500'}`}>
          {time}
        </div>
      </div>
      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12'} pl-16 md:pl-0`}>
        <div className={`p-4 rounded-lg shadow-md mb-4 ${highlight ? 'bg-indigo-100 border border-indigo-300' : 'bg-white'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

// Participation Component
const Participation = () => {
  const [activeTab, setActiveTab] = useState('schools');
  const [openAccordion, setOpenAccordion] = useState('schools');

  const toggleAccordion = (tabName) => {
    setOpenAccordion(openAccordion === tabName ? null : tabName);
  };

  const tabs = [
    { id: 'schools', title: 'Schools', content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4 md:mb-6 pb-2 border-b border-indigo-100">Participating Schools</h4>
        <p className="mb-4 md:mb-6 text-sm md:text-base">The Annual P-CCS K-12 Art Show features artwork from students across all Plymouth-Canton Community Schools, including:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h5 className="font-semibold text-indigo-800 mb-1">Early Childhood Centers</h5>
            <p className="text-xs text-gray-600">Our youngest artists</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg shadow-sm border border-indigo-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h5 className="font-semibold text-indigo-800 mb-1">Elementary Schools</h5>
            <p className="text-xs text-gray-600">Foundation builders</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg shadow-sm border border-indigo-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L15.828 15H13v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h5 className="font-semibold text-indigo-800 mb-1">Middle Schools</h5>
            <p className="text-xs text-gray-600">Creative explorers</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 to-purple-100 p-4 rounded-lg shadow-sm border border-indigo-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h5 className="font-semibold text-indigo-800 mb-1">High Schools at P-CEP</h5>
            <p className="text-xs text-gray-600">Advanced creators</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm mt-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 text-sm">All buildings in the P-CCS district are represented in this showcase, with <span className="font-semibold text-indigo-700">approximately 2,000 student artworks</span> selected for display.</p>
          </div>
        </div>
      </div>
    )},
    { id: 'students', title: 'Student Involvement', content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4 md:mb-6 pb-2 border-b border-indigo-100">Student Involvement</h4>
        <p className="mb-6 text-sm md:text-base">Students from kindergarten through 12th grade participate in this district-wide celebration of creativity. Key aspects of student involvement include:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-5 border-t-4 border-indigo-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h5 className="font-semibold text-indigo-700">Selection Process</h5>
            </div>
            <p className="text-gray-700 text-sm">Art teachers from each school nominate outstanding pieces for inclusion in the show. This is the primary pathway to participation.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 border-t-4 border-purple-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h5 className="font-semibold text-purple-700">Live Demonstrations</h5>
            </div>
            <p className="text-gray-700 text-sm">High school students showcase their artistic process in various disciplines including drawing, painting, ceramics, photography, metals, fashion, and digital art.</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-5 border-t-4 border-blue-400 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h5 className="font-semibold text-blue-700">Participation Scale</h5>
            </div>
            <p className="text-gray-700 text-sm">This major district event features approximately 2,000 artworks selected from students across all schools.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 p-4 rounded-lg border border-indigo-100 shadow-sm flex items-center">
          <div className="text-3xl mr-3">🎨</div>
          <p className="text-gray-700 text-sm italic">Every participant contributes to the vibrant tapestry of student creativity that defines the P-CCS Art Show experience.</p>
        </div>
      </div>
    )},
    { id: 'eligibility', title: 'Eligibility', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4 md:mb-6 pb-2 border-b border-indigo-100">Eligibility Requirements</h4>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3">
            <h5 className="font-semibold text-white">Who Can Participate?</h5>
          </div>
          <div className="p-5">
            <div className="flex items-start mb-4">
              <div className="mt-1 mr-3 text-indigo-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-gray-700">Participation is limited to students currently enrolled in Plymouth-Canton Community Schools. The central requirement is that artwork must be nominated by a P-CCS art teacher.</p>
            </div>
            
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg flex items-start">
              <div className="text-amber-500 mt-0.5 mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-amber-800 mb-1">Important Note:</p>
                <p className="text-gray-700 text-xs">The nomination process is teacher-driven. There is no method for students or parents to directly submit artwork to the show without teacher selection.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3">
            <h5 className="font-semibold text-white">Originality Requirements</h5>
          </div>
          <div className="p-5">
            <p className="text-gray-700 mb-4">While specific rules for the 2025 show have not been published, P-CCS places a high value on originality:</p>
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">P-CCS affiliated scholarships explicitly state they do not accept pieces with AI components</p>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">All artwork is expected to be the original creation of the student</p>
              </div>
              <div className="flex items-start">
                <div className="bg-indigo-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Artwork should be appropriate for a family-friendly, educational environment</p>
              </div>
            </div>
            <div className="flex items-center bg-indigo-50 p-3 rounded-lg">
              <span className="text-2xl mr-2">📝</span>
              <p className="text-gray-700 text-xs italic">Students are encouraged to document their creative process, which may include preliminary sketches and in-progress photos.</p>
            </div>
          </div>
        </div>
      </div>
    )},
    { id: 'awards', title: 'Awards', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-4 md:mb-6 pb-2 border-b border-indigo-100">Recognition & Awards</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg shadow-sm p-5 border border-indigo-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h5 className="font-semibold text-indigo-800">Certificates of Recognition</h5>
            </div>
            <p className="text-gray-700">Every student whose artwork is entered by their art teacher receives a certificate of recognition.</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg shadow-sm p-5 border border-purple-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h5 className="font-semibold text-purple-800">Age-Level Competition</h5>
            </div>
            <p className="text-gray-700">Submitted artwork is entered in competitions organized by age group, providing a fair evaluation framework.</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-3">
            <h5 className="font-semibold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Award Structure
            </h5>
          </div>
          <div className="p-5">
            <p className="text-gray-700 mb-4">Based on past shows, awards typically include:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                <div className="flex justify-center mb-2">
                  <div className="bg-green-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                </div>
                <h6 className="font-semibold text-green-800 text-center mb-1">Elementary</h6>
                <p className="text-gray-700 text-center text-xs">"Awards of Excellence" (non-ranked recognition)</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                <div className="flex justify-center mb-2">
                  <div className="bg-blue-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                    </svg>
                  </div>
                </div>
                <h6 className="font-semibold text-blue-800 text-center mb-1">Middle/High School</h6>
                <p className="text-gray-700 text-center text-xs">"Honorable Mentions"</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                <div className="flex justify-center mb-2">
                  <div className="bg-purple-100 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h6 className="font-semibold text-purple-800 text-center mb-1">High School Only</h6>
                <p className="text-gray-700 text-center text-xs">First, second, and third-place cash prizes</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-sm p-5 border-l-4 border-indigo-500 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="text-3xl mr-3">🎨</div>
              <h5 className="font-semibold text-indigo-800">Juried Awards</h5>
            </div>
            <p className="text-gray-700">Both professional jurors and "celebrity judges" award ribbons to select works. These special recognitions are presented during the dedicated awards ceremony from 3:30 PM to 4:00 PM.</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg shadow-sm p-5 border border-green-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-3">
              <div className="text-3xl mr-3">💡</div>
              <h5 className="font-semibold text-green-800">Strategic Insight</h5>
            </div>
            <p className="text-gray-700">The elementary category's "excellence awards" potentially offer better recognition odds than the competitive high school rankings, making early participation particularly advantageous.</p>
          </div>
        </div>
      </div>
    )}
  ];
  
  return (
    <section className="my-10 md:my-16">
      <SectionTitle>Participation</SectionTitle>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-white rounded-xl"></div>
      
        {/* Mobile Accordion View */}
        <div className="md:hidden mb-4 relative z-10 px-3 py-5">
          <div className="mb-4 text-sm text-gray-600 text-center font-medium">Tap a section to expand</div>
          <Accordion>
            {tabs.map(tab => (
              <AccordionItem 
                key={tab.id}
                title={tab.title}
                isOpen={openAccordion === tab.id}
                onToggle={() => toggleAccordion(tab.id)}
              >
                {tab.content}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Desktop Tab View */}
        <div className="hidden md:block bg-white rounded-xl shadow-md overflow-hidden relative z-10">
          <div className="flex flex-wrap border-b overflow-x-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50">
            {tabs.map(tab => (
              <TabButton 
                key={tab.id}
                active={activeTab === tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? 'bg-white shadow-sm' : ''}
              >
                {tab.title}
              </TabButton>
            ))}
          </div>
          <div className="p-6">
            {tabs.find(tab => tab.id === activeTab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

// Tab Button Component
const TabButton = ({ children, active, onClick, className }) => {
  return (
    <button 
      className={`py-3 px-5 md:px-6 text-sm md:text-base font-medium focus:outline-none transition-all duration-200 whitespace-nowrap relative ${className} ${
        active 
          ? 'text-indigo-700 font-semibold' 
          : 'text-gray-600 hover:text-indigo-600 hover:bg-white/50'
      }`}
      onClick={onClick}
    >
      {children}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
      )}
    </button>
  );
};

// Accordion Components (New)
const Accordion = ({ children }) => {
  return <div className="space-y-2 md:hidden">{children}</div>;
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none transition-all duration-200 ${
          isOpen 
            ? 'bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-800' 
            : 'bg-white hover:bg-gray-50'
        }`}
        onClick={onToggle}
      >
        <h4 className={`text-md font-medium ${isOpen ? 'text-indigo-800' : 'text-gray-700'}`}>{title}</h4>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isOpen ? 'bg-indigo-100' : 'bg-gray-100'}`}>
          <svg 
            className={`w-4 h-4 ${isOpen ? 'text-indigo-600' : 'text-gray-500'} transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="border-t border-indigo-100 bg-white p-5">
          {children}
        </div>
      )}
    </div>
  );
};

// JudgingProcess Component
const JudgingProcess = () => {
  const [activeTab, setActiveTab] = useState('professional');
  const [openAccordion, setOpenAccordion] = useState('professional');

  const toggleAccordion = (tabName) => {
    setOpenAccordion(openAccordion === tabName ? null : tabName);
  };

  const judgingCriteria = [
    { icon: "🎨", name: "Composition", description: "How well artistic elements are arranged using design principles; visual balance and structure" },
    { icon: "✨", name: "Creativity", description: "Originality of the idea, innovation in approach, and uniqueness of vision" },
    { icon: "🔍", name: "Focus", description: "Clarity of the artwork\'s subject/theme, the artist\'s intent, and overall cohesion" },
    { icon: "⚒️", name: "Craftsmanship", description: "Skill in using materials, neatness of execution, and attention to detail" },
    { icon: "🖌️", name: "Technique", description: "Specific methods and skills applied in creating the artwork; mastery of the chosen medium" },
  ];

  const tabs = [
    { id: 'professional', title: 'Professional Jurors', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Professional Jurors</h4>
        <p className="mb-3 md:mb-4">Professional jurors evaluate artwork using established artistic criteria. In past shows, these judges have included:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">University Art Professors</h5>
            <p className="text-gray-700 text-xs md:text-sm">Academic art experts who bring deep knowledge of art theory and practice</p>
            <p className="text-gray-600 italic text-xs mt-1 md:mt-2">Example: Christopher Bockledge, Eastern Michigan University</p>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Art Studio Owners</h5>
            <p className="text-gray-700 text-xs md:text-sm">Professional artists with practical experience in the art world</p>
            <p className="text-gray-600 italic text-xs mt-1 md:mt-2">Example: Sharon Lee Dillenbeck, D&M Art Studio in Canton</p>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Experienced Art Educators</h5>
            <p className="text-gray-700 text-xs md:text-sm">Retired art teachers with decades of experience in art education</p>
            <p className="text-gray-600 italic text-xs mt-1 md:mt-2">Example: Christine McWatt, 34 years of teaching experience</p>
          </div>
        </div>
        <p className="text-gray-600 italic text-xs md:text-sm">Professional jurors typically focus on technical excellence, understanding of art principles, and creative expression.</p>
      </div>
    )},
    { id: 'celebrity', title: 'Celebrity Judges', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Celebrity Judges</h4>
        <p className="mb-3 md:mb-4">Celebrity judges select winners based on their own personal criteria. These judges often include:</p>
        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 text-xs md:text-sm">
          <li className="flex items-start">
            <svg className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span><span className="font-medium text-indigo-800">Elected Officials</span> - Local politicians and community leaders</span>
          </li>
          <li className="flex items-start">
            <svg className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span><span className="font-medium text-indigo-800">Community Arts Supporters</span> - Local patrons and advocates of the arts</span>
          </li>
          <li className="flex items-start">
            <svg className="h-4 w-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
            <span><span className="font-medium text-indigo-800">P-CCS VIPs</span> - District administrators and educational leaders</span>
          </li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 text-gray-700 text-xs md:text-sm">
          <h5 className="font-semibold text-yellow-800">What makes Celebrity Judging unique?</h5>
          <p className="mb-1 md:mb-2">Unlike professional jurors who use defined criteria, celebrity judges use their personal taste and preferences. This creates an opportunity for artwork that makes a strong emotional connection or presents a unique perspective.</p>
          <p>For elementary students especially, bright mixed media works with strong emotional impact typically outperform technically perfect pieces when evaluated by celebrity judges.</p>
        </div>
      </div>
    )},
    { id: 'criteria', title: 'Judging Criteria', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Judging Criteria</h4>
        <p className="mb-3 md:mb-4">Professional jurors in past shows have evaluated artwork based on five key components:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
          {judgingCriteria.map(item => (
            <div key={item.name} className="bg-indigo-50 p-3 md:p-4 rounded-lg flex items-start space-x-3">
              <span className="text-2xl md:text-3xl">{item.icon}</span>
              <div>
                <h5 className="font-semibold text-indigo-700">{item.name}</h5>
                <p className="text-gray-700 text-xs md:text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-indigo-100 p-3 md:p-4 rounded-lg">
          <p className="text-indigo-700 italic text-xs md:text-sm">
            "It\'s not just about painting a pretty picture or drawing a self-portrait, it\'s about looking at things in a different way."
          </p>
          <p className="text-right text-gray-600 mt-1 md:mt-2 text-xs">— Tim Schoenherr, former P-CCS Visual and Performing Arts Coordinator</p>
        </div>
      </div>
    )},
    { id: 'strategy', title: 'Strategic Insights', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Strategic Approaches to Judging</h4>
        
        {/* Card for Dual Pathway Advantage */}
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-md p-5 mb-6 border border-indigo-100">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="bg-indigo-100 rounded-full p-3 flex-shrink-0">
              <svg className="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h5 className="font-semibold text-indigo-800 text-lg mb-2">The Dual Pathway Advantage</h5>
              <p className="text-gray-700 text-sm md:text-base">
                The show's two-tier judging system creates multiple paths to recognition. A piece that might not win a 
                professional juror's award based on technical criteria could still receive recognition from a celebrity judge 
                based on emotional impact or thematic relevance.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Professional Appeal Strategy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-green-100 transition-transform hover:scale-[1.01] duration-200">
            <div className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <h5 className="font-semibold text-white text-base md:text-lg">Professional Appeal Strategy</h5>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-2 text-sm">For technical recognition from professional jurors:</p>
              <ul className="space-y-2">
                {[
                  "Focus on demonstrating mastery of art elements and principles",
                  "Ensure precision in execution and craftsmanship",
                  "Show conceptual depth and thoughtful development",
                  "Demonstrate appropriate technique for your chosen medium",
                  "Align with Michigan Academic Standards for visual arts"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Celebrity Appeal Strategy Card */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-blue-100 transition-transform hover:scale-[1.01] duration-200">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <h5 className="font-semibold text-white text-base md:text-lg">Celebrity Appeal Strategy</h5>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-2 text-sm">For recognition from celebrity judges:</p>
              <ul className="space-y-2">
                {[
                  "Create pieces with immediate visual impact and emotional resonance",
                  "Consider local connections or community-relevant themes",
                  "Focus on storytelling elements that connect with viewers",
                  "Use vibrant colors and distinctive approaches that stand out",
                  "Create work that demonstrates the P-CCS Learner Profile traits"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <svg className="h-5 w-5 text-blue-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Optimal Strategy Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100 mb-6 transition-transform hover:scale-[1.01] duration-200">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
            <h5 className="font-semibold text-white text-base md:text-lg">Optimal Strategy: Balanced Approach</h5>
          </div>
          <div className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-2/3">
                <p className="text-gray-700 text-sm">
                  The most successful strategy combines elements that appeal to both judging tracks: technically excellent 
                  execution that demonstrates skill (for professional jurors) with emotionally resonant subject matter 
                  or unique perspective (for celebrity judges). Creating work that authentically embodies both qualities 
                  maximizes recognition opportunities.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="bg-purple-50 rounded-lg p-3 text-center h-min">
                  <div className="text-2xl mb-1">🏆</div>
                  <div className="text-purple-800 font-medium text-sm">Higher Recognition Potential</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Strategy Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-red-100 transition-transform hover:scale-[1.01] duration-200">
          <div className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <h5 className="font-semibold text-white text-base md:text-lg">Artwork Documentation Strategy</h5>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-2 text-sm">For any digital or complex artwork:</p>
            <ul className="space-y-2 mb-3">
              {[
                "Document your creative process with preliminary sketches or development photos",
                "Prepare a concise artist statement that articulates your concept and process",
                "Be prepared to explain how your work demonstrates originality",
                "Focus on how human creativity guided any digital tools used"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg className="h-5 w-5 text-red-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-red-800 text-xs font-medium flex items-center gap-1">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                Important Note:
              </p>
              <p className="text-gray-700 text-xs mt-1">
                P-CCS-affiliated arts programs do not accept artwork with AI components, so documentation 
                of your human-driven creative process is essential.
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  ];
  
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Judging Process</SectionTitle>
      
      {/* Mobile Accordion View */}
      <div className="md:hidden mb-4">
        <div className="mb-2 text-sm text-gray-500 text-center">Tap a section to expand</div>
        <Accordion>
          {tabs.map(tab => (
            <AccordionItem 
              key={tab.id}
              title={tab.title}
              isOpen={openAccordion === tab.id}
              onToggle={() => toggleAccordion(tab.id)}
            >
              {tab.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop Tab View */}
      <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-wrap border-b overflow-x-auto">
          {tabs.map(tab => (
            <TabButton 
              key={tab.id}
              active={activeTab === tab.id} 
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </TabButton>
          ))}
        </div>
        <div className="p-4 md:p-6">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

// StrategyByAge Component
const StrategyByAge = () => {
  const [activeAge, setActiveAge] = useState('elementary');
  const [openAccordion, setOpenAccordion] = useState('elementary');

  const toggleAccordion = (tabName) => {
    setOpenAccordion(openAccordion === tabName ? null : tabName);
  };

  const ageStrategies = [
    {
      id: 'elementary',
      title: 'Elementary (K-3)',
      content: (
        <div className="text-sm md:text-base">
          <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Elementary School (K-3) Strategy</h4>
          <div className="mb-4 md:mb-6">
            <p className="mb-3 md:mb-4">For younger elementary students, judges prioritize creativity and expression over technical precision. This age group has a unique advantage:</p>
            <div className="bg-green-50 p-3 md:p-4 rounded-lg mb-3 md:mb-4">
              <p className="font-medium text-green-800">Strategic Advantage:</p>
              <p className="text-gray-700 text-xs md:text-sm">Elementary students receive "excellence awards" rather than ranked placements, potentially offering better odds than the competitive high school categories.</p>
            </div>
            <p className="text-gray-700 text-xs md:text-sm">Focus on creating joyful, emotionally resonant work that tells a personal story or shows enthusiasm.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">What Judges Look For</h5>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Creativity and originality</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Emotional expression</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Clean execution (but perfection isn\'t expected)</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Distinctive elements (unique viewpoints or color choices)</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Winning Approaches</h5>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Use bright, vibrant colors that create visual impact</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Create work with personal meaning or storytelling elements</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Focus on careful craftsmanship (neat edges, controlled application)</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Experiment with mixed media for visual interest</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'upperElementary',
      title: 'Upper Elementary (4-6)',
      content: (
        <div className="text-sm md:text-base">
          <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Upper Elementary (4-6) - The Strategic Sweet Spot</h4>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 text-gray-700 mb-4 md:mb-6">
            <h5 className="font-semibold text-yellow-800">The Upper Elementary Advantage</h5>
            <p className="text-xs md:text-sm">Grades 4-6 represent a strategic sweet spot. Students can showcase growing technical skills while maintaining the expressiveness judges appreciate in younger children.</p>
          </div>
          <p className="mb-4 md:mb-6 text-gray-700 text-xs md:text-sm">Work in this age range that demonstrates understanding of art concepts (perspective, color theory) while retaining childlike creativity often performs well in both professional and celebrity judge categories.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Balancing Technique & Creativity</h5>
              <p className="text-gray-700 mb-2 md:mb-3 text-xs md:text-sm">This age group can strike the perfect balance:</p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Show emerging technical skills (basic perspective, shading)</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Demonstrate understanding of color theory and composition</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Maintain a fresh, creative approach that isn\'t overly rigid</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Begin exploring more complex theme development</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Strategic Focus Areas</h5>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Choose subjects that allow demonstration of new skills while maintaining creativity</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Experiment with controlled mixed media techniques</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Practice neat craftsmanship and attention to detail</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Consider developing a recognizable personal style</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'middleHigh',
      title: 'Middle & High School',
      content: (
        <div className="text-sm md:text-base">
          <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Middle & High School Strategy</h4>
          <p className="mb-4 md:mb-6 text-gray-700 text-xs md:text-sm">For older students, expectations for technical skill increase substantially. While elementary students receive "excellence awards," middle and high school students compete for first, second, third place, and honorable mentions, making the competition more rigorous.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Professional Juror Appeal</h5>
              <p className="text-gray-700 mb-2 md:mb-3 text-xs md:text-sm">To impress professional jurors:</p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Demonstrate strong technical proficiency</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Show mastery of composition principles</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Develop conceptual depth beyond visual appeal</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Execute with precision and attention to detail</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
              <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Celebrity Judge Appeal</h5>
              <p className="text-gray-700 mb-2 md:mb-3 text-xs md:text-sm">To appeal to celebrity judges:</p>
              <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Create work with emotional impact or relatability</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Address timely themes or local connections</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Consider community values and educational alignment</li>
                <li className="flex items-start"><svg className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Develop a distinctive visual style that stands out</li>
              </ul>
            </div>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">Advanced Strategy: Dual Appeal</h5>
            <p className="text-gray-700 text-xs md:text-sm">
              For the best chances at recognition, consider creating work that demonstrates technical excellence (for professional jurors) while incorporating emotional depth or relevant themes (for celebrity judges). This dual-appeal approach maximizes opportunities for recognition across both judging categories.
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Success Strategies by Age Group</SectionTitle>
      
      {/* Mobile Accordion View */}
      <div className="md:hidden mb-4">
        <div className="mb-2 text-sm text-gray-500 text-center">Tap a section to expand</div>
        <Accordion>
          {ageStrategies.map(item => (
            <AccordionItem 
              key={item.id}
              title={item.title}
              isOpen={openAccordion === item.id}
              onToggle={() => toggleAccordion(item.id)}
            >
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Desktop Tab View */}
      <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex flex-wrap border-b overflow-x-auto">
          {ageStrategies.map(item => (
            <TabButton 
              key={item.id}
              active={activeAge === item.id} 
              onClick={() => setActiveAge(item.id)}
              className="flex-shrink-0"
            >
              {item.title}
            </TabButton>
          ))}
        </div>
        <div className="p-4 md:p-6">
          {ageStrategies.find(item => item.id === activeAge)?.content}
        </div>
      </div>
    </section>
  );
};

// MediaSelection Component
const MediaSelection = () => {
  return (
    <section className="my-12">
      <SectionTitle>Strategic Media Selection</SectionTitle>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="mb-6 text-gray-700">
          Research indicates certain media tend to perform better in the P-CCS Art Show, particularly for elementary students. 
          Choosing the right medium can significantly impact visual appeal and judges' impressions.
        </p>
        
        <h4 className="text-lg font-semibold text-indigo-800 mb-4">Recommended Media by Age Group</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border border-green-200 rounded-lg overflow-hidden">
            <div className="bg-green-100 px-4 py-2">
              <h5 className="font-medium text-green-800">Most Successful for Elementary Students</h5>
            </div>
            <div className="p-4">
              <ol className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-green-700 mr-2">1.</span>
                  <div>
                    <span className="font-medium text-gray-800">Mixed Media & Collage</span>
                    <p className="text-gray-600 text-sm">Shows creativity and problem-solving; creates visual interest through texture and dimension</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-green-700 mr-2">2.</span>
                  <div>
                    <span className="font-medium text-gray-800">Bright, Colorful Paintings</span>
                    <p className="text-gray-600 text-sm">High visual impact that attracts attention; tempera and acrylic work well for young artists</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-green-700 mr-2">3.</span>
                  <div>
                    <span className="font-medium text-gray-800">Oil Pastels</span>
                    <p className="text-gray-600 text-sm">Offer vibrant colors and are accessible for younger students to use effectively</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-green-700 mr-2">4.</span>
                  <div>
                    <span className="font-medium text-gray-800">Watercolor</span>
                    <p className="text-gray-600 text-sm">When executed with care and control, demonstrates more advanced skill</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="border border-red-200 rounded-lg overflow-hidden">
            <div className="bg-red-100 px-4 py-2">
              <h5 className="font-medium text-red-800">Media to Consider Avoiding</h5>
            </div>
            <div className="p-4">
              <ul className="space-y-4">
                <li className="flex">
                  <span className="font-bold text-red-700 mr-2">•</span>
                  <div>
                    <span className="font-medium text-gray-800">Pencil-only Drawings</span>
                    <p className="text-gray-600 text-sm">May lack visual impact compared to more colorful entries</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-red-700 mr-2">•</span>
                  <div>
                    <span className="font-medium text-gray-800">Digital Art (for young students)</span>
                    <p className="text-gray-600 text-sm">Often difficult for elementary students to execute at a level that competes with traditional media</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="font-bold text-red-700 mr-2">•</span>
                  <div>
                    <span className="font-medium text-gray-800">Complex Media with Messy Execution</span>
                    <p className="text-gray-600 text-sm">Poor craftsmanship can diminish even creative ideas</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <h4 className="text-lg font-semibold text-indigo-800 mb-4">Media Selection Tips by Age</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-medium text-indigo-700 mb-2">K-3 Students</h5>
            <p className="text-gray-700 text-sm">
              Focus on bright, joyful media that students can control well: tempera paint, collage, oil pastels, 
              and simple mixed media. Avoid materials that are difficult to apply neatly.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-medium text-indigo-700 mb-2">Upper Elementary (4-6)</h5>
            <p className="text-gray-700 text-sm">
              Begin exploring more complex media: controlled watercolors, more sophisticated mixed media, colored pencil 
              with fine details, acrylics with careful blending, and introduction to printmaking techniques.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h5 className="font-medium text-indigo-700 mb-2">Middle & High School</h5>
            <p className="text-gray-700 text-sm">
              Challenge yourself with technically demanding media: advanced watercolor techniques, oil painting, 
              detailed drawing media, photography, sculpture, digital art (high school), and multimedia installations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// SubmissionGuidelines Component
const SubmissionGuidelines = () => {
  const [activeTip, setActiveTip] = useState(null);
  
  const tips = [
    {
      title: "Develop Rapport with Art Teachers",
      content: "Since teacher nomination is the critical gateway to the show, building a positive relationship with your art teacher is essential. Show enthusiasm during class, ask thoughtful questions, participate actively, and demonstrate genuine effort. Complete assignments thoroughly and show consistent improvement throughout the year. Remember that art teachers are specifically looking for work that demonstrates the five key judging criteria: composition, creativity, focus, craftsmanship, and technique."
    },
    {
      title: "Focus on Originality",
      content: "Original work is highly valued. While no explicit rules for the K-12 show have been published regarding AI art, P-CCS affiliated scholarships do not accept artwork with AI components. Create genuinely original work and document your creative process with preliminary sketches or development photos. This documentation is increasingly important for digital artwork to demonstrate human-driven creativity."
    },
    {
      title: "Develop a Distinctive Style",
      content: "Art teachers who see hundreds of student pieces often notice and appreciate students developing a unique visual approach or signature elements. This helps teachers identify your growth over time and makes your work more memorable in a competitive environment where approximately 2,000 pieces are selected district-wide."
    },
    {
      title: "Align with P-CCS Values and Curriculum",
      content: "The district values traits like \'Innovator,\' \'Critical Thinker,\' and \'Communicator.\' Artwork that demonstrates these qualities may resonate with judges familiar with district values. Additionally, work that shows an understanding of Michigan Academic Standards for visual arts will likely receive favorable consideration. Consider how your art demonstrates learning objectives established in the curriculum."
    },
    {
      title: "Prioritize Craftsmanship",
      content: "Regardless of your age or skill level, careful craftsmanship and attention to detail significantly impact judges\' impressions. Ensure clean edges, careful application of media, secure attachment of collage elements, and overall neatness in your presentation. Professional jurors specifically evaluate craftsmanship as one of their five formal criteria."
    },
    {
      title: "Balance Technical Excellence with Emotional Impact",
      content: "The dual judging system (professional jurors and celebrity judges) means that work should ideally balance technical excellence with emotional resonance and originality. For elementary students especially, bright mixed media works with strong emotional impact typically outperform technically perfect pieces when evaluated by celebrity judges."
    },
    {
      title: "Consider Strategic Timing",
      content: "With over 2,000 pieces selected across the district, there may be informal quotas for representation from each school. Understanding when your art teacher makes selections and ensuring your best work is complete and visible during that period can be important. Developing consistent quality work throughout the year, rather than a single piece, increases your chances of selection."
    }
  ];
  
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Submission Guidelines & Strategic Tips</SectionTitle>
      
      <div className="bg-white rounded-lg shadow-md md:p-6">
        <p className="mb-4 md:mb-6 text-gray-700 px-4 pt-4 md:px-0 md:pt-0 text-sm md:text-base">
          Based on comprehensive research of P-CCS art education processes and practices, here are strategic 
          approaches for maximizing your chances of being selected for the May 17, 2025 art show:
        </p>
        
        <div className="divide-y divide-gray-200">
          {tips.map((tip, index) => (
            <div key={index} className="py-3 md:py-4">
              <button 
                className="w-full flex justify-between items-center text-left focus:outline-none p-4 md:p-0 group"
                onClick={() => setActiveTip(activeTip === index ? null : index)}
              >
                <h4 className="text-sm md:text-lg font-medium text-indigo-700 group-hover:text-indigo-800">{tip.title}</h4>
                <span className={`ml-4 md:ml-6 flex-shrink-0 text-indigo-600 transition-transform transform ${activeTip === index ? 'rotate-180' : ''}`}>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
              {activeTip === index && (
                <div className="mt-2 px-4 pb-3 md:px-0 md:pb-0 md:pr-12">
                  <p className="text-gray-700 text-xs md:text-sm">{tip.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6 md:mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg shadow-sm border border-blue-200">
          <h5 className="font-semibold text-blue-800 mb-3 text-base md:text-lg flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            Ethical Engagement Strategies
          </h5>
          
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            When engaging with teachers and administrators, maintain these ethical boundaries:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="font-medium text-blue-800 mb-1">Focus on Growth</h6>
                  <p className="text-gray-700 text-xs md:text-sm">Seek guidance for artistic development rather than pressuring for nominations</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="font-medium text-blue-800 mb-1">Frame Conversations Properly</h6>
                  <p className="text-gray-700 text-xs md:text-sm">Ask "How can I improve my techniques?" rather than "Will you select my work?"</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="font-medium text-blue-800 mb-1">Professional Communication</h6>
                  <p className="text-gray-700 text-xs md:text-sm">Use email respectfully following district format: firstname.lastname@pccsk12.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-3 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h6 className="font-medium text-blue-800 mb-1">Appropriate Engagement</h6>
                  <p className="text-gray-700 text-xs md:text-sm">Contact district coordinators like Cathie Williams only for curriculum or broader education questions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-blue-800 text-xs md:text-sm italic">
              "Building positive, respectful relationships with educators is as important as developing your artistic skills."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Gallery Component
const Gallery = () => {
  const artCategories = [
    { name: "Drawing", icon: "✏️" },
    { name: "Painting", icon: "🎨" },
    { name: "Ceramics", icon: "🏺" },
    { name: "Photography", icon: "📷" },
    { name: "Metals", icon: "⚒️" },
    { name: "Fashion", icon: "👕" },
    { name: "Digital Art", icon: "💻" }
  ];

  return (
    <section className="my-12">
      <SectionTitle>Art Categories</SectionTitle>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {artCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-3xl mb-2">{category.icon}</div>
            <h4 className="font-medium text-indigo-800">{category.name}</h4>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h4 className="text-xl font-semibold text-indigo-800 mb-4">Live Demonstrations</h4>
        <p className="text-gray-700 mb-4">
          From 12:00 PM to 3:00 PM, high school students will demonstrate their artistic skills in the categories above. 
          This is a unique opportunity to see the creative process in action and learn about the various art programs 
          offered at the high school level.
        </p>
        <div className="bg-indigo-50 p-4 rounded-lg">
          <p className="text-indigo-700 italic">
            "It's a great place to see what other schools are doing for art and helpful to see what the high school 
            classes do for art projects so you can choose the art classes you want to take in the future."
          </p>
          <p className="text-right text-gray-600 mt-2">— Mrs. Hedrick, West Middle School Art Teacher</p>
        </div>
      </div>
    </section>
  );
};

// FAQ Component
const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  
  const questions = [
    {
      question: "Is this event open to the public?",
      answer: "Yes, the Annual P-CCS K-12 Art Show is open to everyone in the community. The P-CCS arts educators explicitly invite the public to celebrate the work of talented young artists."
    },
    {
      question: "Is there an admission fee?",
      answer: "There is no required entry fee, but there is a suggested donation of $5-$10 per family. All donations support the P-CCS art programs and future art shows."
    },
    {
      question: "Who organizes this event?",
      answer: "The event is organized by Plymouth-Canton Community Schools (P-CCS), with P-CCS art educators playing a central role in planning, artwork selection, and execution."
    },
    {
      question: "How are artworks selected for the show?",
      answer: "Art teachers from all schools across the district nominate outstanding pieces for inclusion in the show. These selections represent the best work from each school."
    },
    {
      question: "What types of awards are given?",
      answer: "Awards include juried ribbons from professional judges and special recognitions from celebrity judges. In past shows, elementary students received \'Awards of Excellence,\' while middle and high school students could earn \'Honorable Mentions.\' High school students had the opportunity to win first, second, and third-place cash prizes."
    },
    {
      question: "Are there restrictions on what type of art can be submitted?",
      answer: "While specific rules for the 2025 show haven\'t been published, P-CCS generally values original artwork. P-CCS-affiliated scholarships do not accept artwork with AI components, suggesting a preference for traditional artistic creation. All work must be appropriate for a family-friendly, educational environment."
    },
    {
      question: "How long has this event been running?",
      answer: "According to Mrs. Hedrick, an art teacher interviewed in \'The Bite\' student newspaper, P-CCS has been participating in this event since 2009."
    }
  ];
  
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      
      <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {questions.map((item, index) => (
          <div key={index} className="py-0">
            <button 
              className="w-full flex justify-between items-center text-left focus:outline-none p-4 group"
              onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
            >
              <h4 className="text-sm md:text-lg font-medium text-gray-800 group-hover:text-indigo-700">{item.question}</h4>
              <span className={`ml-4 md:ml-6 flex-shrink-0 text-indigo-600 transition-transform transform ${openQuestion === index ? 'rotate-180' : ''}`}>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </button>
            {openQuestion === index && (
              <div className="px-4 pb-4 md:pr-12">
                <p className="text-gray-700 text-xs md:text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Student Success Checklist Component (New)
const StudentSuccessChecklist = () => {
  return (
    <section className="my-8 md:my-12">
      <h3 className="text-2xl font-bold mb-6 border-b-2 border-gray-300 pb-2">
        Student Success Checklist
      </h3>
      
      <div className="bg-white border border-gray-300">
        {/* Key Event Information */}
        <div className="border-b border-gray-300 bg-gray-100 p-4 flex justify-between items-center">
          <span className="font-bold">P-CCS Art Show</span>
          <span className="font-mono text-sm bg-black text-white px-2 py-1">MAY 17, 2025 · 11:30AM-4:00PM · SALEM HIGH</span>
        </div>
        
        {/* Understanding the Show */}
        <div className="border-b border-gray-300 p-4">
          <h4 className="uppercase text-xs tracking-widest mb-3 font-bold text-gray-500 text-left">JUDGING CRITERIA</h4>
          <ul className="space-y-2 text-left">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Confirm teacher nomination required — no direct student submissions permitted</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Review the 5 judging criteria: Composition, Creativity, Focus, Craftsmanship, Technique</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Analyze works through both technical (Professional) and impact (Celebrity) judging lenses</span>
            </li>
          </ul>
        </div>
        
        {/* Artwork Preparation */}
        <div className="border-b border-gray-300 p-4">
          <h4 className="uppercase text-xs tracking-widest mb-3 font-bold text-gray-500 text-left">ARTWORK PREPARATION</h4>
          <ul className="space-y-2 text-left">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Create original work — AI components are disqualified</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Prioritize craftsmanship: clean edges, controlled application, secure attachments</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Select strategic medium based on age (Elementary: mixed media, bright paintings, oil pastels)</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Balance technical execution with emotional impact</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Document creative process with sketches/photos (essential for digital work)</span>
            </li>
          </ul>
        </div>
        
        {/* Teacher Relationship */}
        <div className="p-4">
          <h4 className="uppercase text-xs tracking-widest mb-3 font-bold text-gray-500 text-left">TEACHER ENGAGEMENT</h4>
          <ul className="space-y-2 text-left">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Build consistent class participation record before nominations</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Complete assignments thoroughly; demonstrate improvement over time</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Ask for technique improvement, not selection preference</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 flex-shrink-0" />
              <span className="text-left">Identify teacher selection timeframes; ensure work visible during this period</span>
            </li>
          </ul>
        </div>
        
        {/* Strategic Framework */}
        <div className="bg-gray-100 p-4 border-t border-gray-300">
          <p className="text-sm text-gray-700">
            <span className="font-bold">CRITICAL PATH:</span> Teacher nomination → Technical excellence → Emotional resonance → Show selection
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Plymouth-Canton Community Schools</h3>
            <p className="text-indigo-200">Celebrating Student Creativity</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-indigo-200">Saturday, May 17, 2025</p>
            <p className="text-white">Salem High School, 46181 Joy Rd, Canton, MI 48187</p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-indigo-700 text-center text-indigo-300 text-sm">
          <p>For more information about P-CCS art programs, please visit the district website.</p>
        </div>
      </div>
    </footer>
  );
};

// Strategic Approaches Component (New)
const StrategicApproaches = () => {
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Strategic Approaches to Judging</SectionTitle>
      
      {/* Dual Pathway Card */}
      <div className="mb-8 bg-white rounded-xl overflow-hidden shadow-lg border border-indigo-100">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-5 py-4">
          <h4 className="text-white text-xl font-semibold">The Dual Pathway Advantage</h4>
        </div>
        <div className="p-5 bg-gradient-to-b from-indigo-50 to-white">
          <p className="text-gray-700">
            The show's two-tier judging system creates multiple paths to recognition. A piece that might not win a 
            professional juror's award based on technical criteria could still receive recognition from a celebrity judge 
            based on emotional impact or thematic relevance.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Professional Appeal Strategy Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2.5 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h5 className="text-lg font-semibold text-green-700">Professional Appeal Strategy</h5>
            </div>
            <p className="text-gray-600 mb-3 font-medium">For technical recognition from professional jurors:</p>
            <ul className="space-y-2.5">
              {[
                "Focus on demonstrating mastery of art elements and principles",
                "Ensure precision in execution and craftsmanship",
                "Show conceptual depth and thoughtful development",
                "Demonstrate appropriate technique for your chosen medium",
                "Align with Michigan Academic Standards for visual arts"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-green-100 text-green-600 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Celebrity Appeal Strategy Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
          <div className="p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-100 p-2.5 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h5 className="text-lg font-semibold text-blue-700">Celebrity Appeal Strategy</h5>
            </div>
            <p className="text-gray-600 mb-3 font-medium">For recognition from celebrity judges:</p>
            <ul className="space-y-2.5">
              {[
                "Create pieces with immediate visual impact and emotional resonance",
                "Consider local connections or community-relevant themes",
                "Focus on storytelling elements that connect with viewers",
                "Use vibrant colors and distinctive approaches that stand out",
                "Create work that demonstrates the P-CCS Learner Profile traits (innovator, communicator, etc.)"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Optimal Strategy Card */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-200 mb-8 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 px-5 py-4 border-b border-purple-200">
          <h5 className="text-lg font-semibold text-purple-800 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
            Optimal Strategy: Balanced Approach
          </h5>
        </div>
        <div className="p-5">
          <p className="text-gray-700 mb-4">
            The most successful strategy combines elements that appeal to both judging tracks: technically excellent 
            execution that demonstrates skill (for professional jurors) with emotionally resonant subject matter or unique 
            perspective (for celebrity judges). Creating work that authentically embodies both qualities maximizes recognition 
            opportunities.
          </p>
          
          <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-center gap-3 max-w-md mx-auto">
            <div className="text-2xl">🏆</div>
            <p className="text-purple-800 font-medium">Higher chances for recognition across all judge categories</p>
          </div>
        </div>
      </div>
      
      {/* Documentation Strategy Card */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-red-200 hover:shadow-xl transition-shadow duration-300">
        <div className="bg-gradient-to-r from-red-100 to-red-50 px-5 py-4 border-b border-red-200">
          <h5 className="text-lg font-semibold text-red-800 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Artwork Documentation Strategy
          </h5>
        </div>
        <div className="p-5">
          <p className="text-gray-600 mb-3 font-medium">For any digital or complex artwork:</p>
          <ul className="space-y-2.5 mb-4">
            {[
              "Document your creative process with preliminary sketches or development photos",
              "Prepare a concise artist statement that articulates your concept and process",
              "Be prepared to explain how your work demonstrates originality",
              "Focus on how human creativity guided any digital tools used"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-red-100 text-red-600 rounded-full">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-4">
            <div className="flex items-center gap-2 mb-1">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="font-semibold text-red-700">Important Note:</p>
            </div>
            <p className="text-gray-700 text-sm">
              P-CCS-affiliated arts programs do not accept artwork with AI components, so documentation 
              of your human-driven creative process is essential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;