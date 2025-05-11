import { useState } from 'react';

// KeyContacts Component
const KeyContacts = () => {
  const contacts = [
    {
      category: "District Leadership",
      categoryBg: "bg-indigo-600",
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
      categoryBg: "bg-teal-600",
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

  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Key Contacts & Influence Network</SectionTitle>
      
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
        <p className="mb-6 text-gray-700 text-sm md:text-base">
          Understanding the key decision-makers in the P-CCS art education network can help students and parents 
          navigate the art show process more effectively. Here are the most influential figures identified through research.
        </p>
        
        <div className="space-y-8">
          {contacts.map((group, groupIndex) => (
            <div key={groupIndex} className="rounded-lg overflow-hidden border border-gray-200">
              <div className={`${group.categoryBg} px-4 py-3`}>
                <h4 className={`font-semibold ${group.categoryText}`}>{group.category}</h4>
              </div>
              <div className="p-4 space-y-6">
                {group.individuals.map((contact, contactIndex) => (
                  <div key={contactIndex} className="bg-gray-50 p-4 rounded-md shadow-sm border border-gray-100">
                    <h5 className="font-medium text-indigo-800 text-lg">{contact.name}</h5>
                    {contact.role && <p className="text-gray-700 text-sm"><span className="font-medium">Role:</span> {contact.role}</p>}
                    {contact.schools && <p className="text-gray-700 text-sm"><span className="font-medium">Schools:</span> {contact.schools}</p>}
                    {contact.school && <p className="text-gray-700 text-sm"><span className="font-medium">School:</span> {contact.school}</p>}
                    {contact.email && (
                      <p className="text-gray-700 text-sm">
                        <span className="font-medium">Email:</span> 
                        <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:underline ml-1">{contact.email}</a>
                      </p>
                    )}
                    {contact.description && <p className="text-gray-600 text-xs md:text-sm mt-2">{contact.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-8 border border-blue-200">
          <h5 className="font-semibold text-blue-800 mb-2">Influence Network Strategic Insight</h5>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Understanding this network of influence is crucial for strategic engagement:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base">
            {[
              "Art teachers are the primary gateway to nomination - they select which student work is submitted to the show",
              "Cathie Williams, as the district arts coordinator, likely influences overall selection guidelines and priorities",
              "School PTAs/PTOs may include arts committee members who advocate for visual arts",
              "Building positive relationships with these key figures can increase a student\'s chances of having work selected"
            ].map((insight, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 font-sans">
      <Header />
      <StickyMobileHeader /> {/* Added Sticky Header for Mobile */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <Overview />
        <EventDetails />
        <Timeline />
        <KeyContacts />
        <Participation />
        <JudgingProcess />
        <StrategyByAge />
        <MediaSelection />
        <SubmissionGuidelines />
        <StudentSuccessChecklist />
        <Gallery />
        <FAQ />
      </div>
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
const SectionTitle = ({ children }) => {
  return (
    <h3 className="text-xl md:text-3xl font-bold text-indigo-800 mb-4 md:mb-6 pb-2 text-left md:text-center md:border-b-2 md:border-indigo-200">
      {children}
    </h3>
  );
};

// Overview Component
const Overview = () => {
  return (
    <section className="my-12">
      <SectionTitle>Event Overview</SectionTitle>
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

  // Basic Add to Calendar link (ICS file generation would be more robust)
  const addToCalendarLink = () => {
    // Using a simplified Google Calendar link for demonstration
    // A proper solution would involve generating an .ics file or using a library
    const startTime = "20250517T113000"; // YYYYMMDDTHHMMSS (UTC is preferred for .ics)
    const endTime = "20250517T160000";
    const title = encodeURIComponent("P-CCS K-12 Art Show");
    const details = encodeURIComponent("Annual P-CCS K-12 Art Show. Location: Salem High School Cafeteria. More info: [Link to page]");
    const location = encodeURIComponent(eventLocation);
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
  };

  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Event Details</SectionTitle>
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
          <a 
            href={addToCalendarLink()} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line><line x1="12" y1="14" x2="12" y2="18"></line><line x1="10" y1="16" x2="14" y2="16"></line>
            </svg>
            Add to Calendar
          </a>
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
    <section className="my-8 md:my-12">
      <SectionTitle>Event Schedule</SectionTitle>
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
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Participating Schools</h4>
        <p className="mb-3 md:mb-4 text-sm md:text-base">The Annual P-CCS K-12 Art Show features artwork from students across all Plymouth-Canton Community Schools, including:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside text-gray-700 text-sm md:text-base">
          <li>Early Childhood Centers</li>
          <li>Elementary Schools</li>
          <li>Middle Schools</li>
          <li>High Schools at P-CEP</li>
        </ul>
        <p className="mt-3 md:mt-4 text-gray-600 italic text-xs md:text-sm">All buildings in the P-CCS district are represented in this showcase, with approximately 2,000 student artworks selected for display.</p>
      </div>
    )},
    { id: 'students', title: 'Student Involvement', content: (
      <div>
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Student Involvement</h4>
        <div className="space-y-3 md:space-y-4 text-sm md:text-base">
          <p>Students from kindergarten through 12th grade participate in this district-wide celebration of creativity. Key aspects of student involvement include:</p>
          <div className="pl-3 md:pl-4 border-l-4 border-indigo-200">
            <h5 className="font-semibold text-indigo-700">Selection Process</h5>
            <p className="text-gray-700">Art teachers from each school nominate outstanding pieces for inclusion in the show. This is the primary pathway to participation.</p>
          </div>
          <div className="pl-3 md:pl-4 border-l-4 border-indigo-200">
            <h5 className="font-semibold text-indigo-700">Live Demonstrations</h5>
            <p className="text-gray-700">High school students showcase their artistic process in various disciplines including drawing, painting, ceramics, photography, metals, fashion, and digital art.</p>
          </div>
          <div className="pl-3 md:pl-4 border-l-4 border-indigo-200">
            <h5 className="font-semibold text-indigo-700">Participation Scale</h5>
            <p className="text-gray-700">This major district event features approximately 2,000 artworks selected from students across all schools.</p>
          </div>
        </div>
      </div>
    )},
    { id: 'eligibility', title: 'Eligibility', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Eligibility Requirements</h4>
        <div className="mb-4 md:mb-6">
          <h5 className="font-semibold text-indigo-700 mb-2">Who Can Participate?</h5>
          <p className="text-gray-700 mb-3">Participation is limited to students currently enrolled in Plymouth-Canton Community Schools. The central requirement is that artwork must be nominated by a P-CCS art teacher.</p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 md:p-4 text-gray-700 mb-3 md:mb-4 text-xs md:text-sm">
            <p className="font-medium">Important Note:</p>
            <p>The nomination process is teacher-driven. There is no method for students or parents to directly submit artwork to the show without teacher selection.</p>
          </div>
        </div>
        <div>
          <h5 className="font-semibold text-indigo-700 mb-2">Originality Requirements</h5>
          <p className="text-gray-700 mb-3">While specific rules for the 2025 show have not been published, P-CCS places a high value on originality:</p>
          <ul className="list-disc pl-4 md:pl-6 mb-3 md:mb-4 text-gray-700 space-y-1 md:space-y-2">
            <li>P-CCS affiliated scholarships explicitly state they do not accept pieces with AI components</li>
            <li>All artwork is expected to be the original creation of the student</li>
            <li>Artwork should be appropriate for a family-friendly, educational environment</li>
          </ul>
          <p className="text-gray-600 italic text-xs md:text-sm">Students are encouraged to document their creative process, which may include preliminary sketches and in-progress photos.</p>
        </div>
      </div>
    )},
    { id: 'awards', title: 'Awards', content: (
      <div className="text-sm md:text-base">
        <h4 className="text-lg md:text-xl font-semibold text-indigo-800 mb-3 md:mb-4">Recognition & Awards</h4>
        <div className="space-y-3 md:space-y-4">
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Certificates of Recognition</h5>
            <p className="text-gray-700">Every student whose artwork is entered by their art teacher receives a certificate of recognition.</p>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Age-Level Competition</h5>
            <p className="text-gray-700">Submitted artwork is entered in competitions organized by age group, providing a fair evaluation framework.</p>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Award Structure</h5>
            <p className="text-gray-700 mb-2">Based on past shows, awards typically include:</p>
            <ul className="list-disc pl-4 md:pl-6 text-gray-700 space-y-1">
              <li>Elementary: "Awards of Excellence" (non-ranked recognition)</li>
              <li>Middle/High School: "Honorable Mentions"</li>
              <li>High School Only: First, second, and third-place cash prizes</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-indigo-700">Juried Awards</h5>
            <p className="text-gray-700">Both professional jurors and "celebrity judges" award ribbons to select works. These special recognitions are presented during the dedicated awards ceremony from 3:30 PM to 4:00 PM.</p>
          </div>
          <div className="bg-green-50 p-3 md:p-4 rounded-lg">
            <h5 className="font-semibold text-green-700">Strategic Insight</h5>
            <p className="text-gray-700">The elementary category\'s "excellence awards" potentially offer better recognition odds than the competitive high school rankings, making early participation particularly advantageous.</p>
          </div>
        </div>
      </div>
    )}
  ];
  
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Participation</SectionTitle>
      
      {/* Mobile Accordion View */}
      <div className="md:hidden">
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

// Tab Button Component
const TabButton = ({ children, active, onClick, className }) => {
  return (
    <button 
      className={`py-3 px-4 md:px-6 text-sm md:text-base font-medium focus:outline-none transition-colors whitespace-nowrap ${className} ${
        active 
          ? 'text-indigo-600 border-b-2 border-indigo-600' 
          : 'text-gray-500 hover:text-indigo-500'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// Accordion Components (New)
const Accordion = ({ children }) => {
  return <div className="space-y-2 md:hidden">{children}</div>;
};

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border rounded-md overflow-hidden shadow-sm">
      <button
        className={`w-full flex justify-between items-center p-4 text-left focus:outline-none ${isOpen ? 'bg-indigo-50' : 'bg-white hover:bg-gray-50'}`}
        onClick={onToggle}
      >
        <h4 className={`text-md font-medium ${isOpen ? 'text-indigo-700' : 'text-gray-700'}`}>{title}</h4>
        <svg 
          className={`w-5 h-5 ${isOpen ? 'text-indigo-600' : 'text-gray-400'} transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-100 bg-white">
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
        <div className="bg-indigo-50 p-3 md:p-4 rounded-lg mb-4 md:mb-6">
          <h5 className="font-semibold text-indigo-700 mb-1 md:mb-2">The Dual Pathway Advantage</h5>
          <p className="text-gray-700 text-xs md:text-sm">
            The show\'s two-tier judging system creates multiple paths to recognition. A piece that might not win a professional juror\'s award based on technical criteria could still receive recognition from a celebrity judge based on emotional impact or thematic relevance.
          </p>
        </div>
        <div className="space-y-3 md:space-y-4">
          <div className="pl-3 md:pl-4 border-l-4 border-green-300">
            <h5 className="font-semibold text-green-700">Professional Appeal Strategy</h5>
            <p className="text-gray-700 mb-1 md:mb-2 text-xs md:text-sm">For technical recognition from professional jurors:</p>
            <ul className="list-disc pl-4 md:pl-6 text-gray-700 space-y-1 text-xs md:text-sm">
              <li>Focus on demonstrating mastery of art elements and principles</li>
              <li>Ensure precision in execution and craftsmanship</li>
              <li>Show conceptual depth and thoughtful development</li>
              <li>Demonstrate appropriate technique for your chosen medium</li>
              <li>Align with Michigan Academic Standards for visual arts</li>
            </ul>
          </div>
          <div className="pl-3 md:pl-4 border-l-4 border-blue-300">
            <h5 className="font-semibold text-blue-700">Celebrity Appeal Strategy</h5>
            <p className="text-gray-700 mb-1 md:mb-2 text-xs md:text-sm">For recognition from celebrity judges:</p>
            <ul className="list-disc pl-4 md:pl-6 text-gray-700 space-y-1 text-xs md:text-sm">
              <li>Create pieces with immediate visual impact and emotional resonance</li>
              <li>Consider local connections or community-relevant themes</li>
              <li>Focus on storytelling elements that connect with viewers</li>
              <li>Use vibrant colors and distinctive approaches that stand out</li>
              <li>Create work that demonstrates the P-CCS Learner Profile traits (innovator, communicator, etc.)</li>
            </ul>
          </div>
          <div className="pl-3 md:pl-4 border-l-4 border-purple-300">
            <h5 className="font-semibold text-purple-700">Optimal Strategy: Balanced Approach</h5>
            <p className="text-gray-700 text-xs md:text-sm">
              The most successful strategy combines elements that appeal to both judging tracks: technically excellent 
              execution that demonstrates skill (for professional jurors) with emotionally resonant subject matter 
              or unique perspective (for celebrity judges). Creating work that authentically embodies both qualities 
              maximizes recognition opportunities.
            </p>
          </div>
          <div className="pl-3 md:pl-4 border-l-4 border-red-300 mt-4 md:mt-6">
            <h5 className="font-semibold text-red-700">Artwork Documentation Strategy</h5>
            <p className="text-gray-700 mb-1 md:mb-2 text-xs md:text-sm">For any digital or complex artwork:</p>
            <ul className="list-disc pl-4 md:pl-6 text-gray-700 space-y-1 text-xs md:text-sm">
              <li>Document your creative process with preliminary sketches or development photos</li>
              <li>Prepare a concise artist statement that articulates your concept and process</li>
              <li>Be prepared to explain how your work demonstrates originality</li>
              <li>Focus on how human creativity guided any digital tools used</li>
            </ul>
            <p className="text-gray-600 italic text-xs mt-1 md:mt-2">
              Note: P-CCS-affiliated arts programs do not accept artwork with AI components, so documentation 
              of your human-driven creative process is essential.
            </p>
          </div>
        </div>
      </div>
    )}
  ];
  
  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Judging Process</SectionTitle>
      
      {/* Mobile Accordion View */}
      <div className="md:hidden">
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
      <div className="md:hidden">
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
              className="flex-shrink-0" // Ensure tabs don't wrap aggressively on smaller desktop screens
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
        
        <div className="mt-6 md:mt-8 bg-blue-50 p-4 rounded-b-lg md:rounded-lg border-t md:border border-blue-200">
          <h5 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">Ethical Engagement Strategies</h5>
          <p className="text-gray-700 mb-3 text-xs md:text-sm">
            When engaging with teachers and administrators, maintain these ethical boundaries:
          </p>
          <ul className="space-y-2 text-gray-700 text-xs md:text-sm">
            {[
              "Focus on seeking guidance for student growth rather than pressuring for nominations",
              "Frame requests as interest in artistic development (e.g., \"How can I improve my techniques?\" rather than \"Will you select my work?\")",
              "Use email communication with teachers respectfully, following the district format (firstname.lastname@pccsk12.com)",
              "Engage with district-wide coordinators like Cathie Williams (catherine.williams@pccsk12.com) only regarding curriculum or broader arts education questions"
            ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span>{item}</span>
                </li>
            ))}
          </ul>
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
  const checklistItems = [
    {
      category: "Understanding the Show & Judging",
      items: [
        "Know the key dates: May 17, 2025, 11:30 AM - 4:00 PM at Salem High School.",
        "Understand teacher nomination is essential - no direct student submissions.",
        "Familiarize yourself with the 5 judging criteria: Composition, Creativity, Focus, Craftsmanship, Technique.",
        "Recognize the two judge types: Professional Jurors (technical) and Celebrity Judges (impact/appeal).",
      ],
    },
    {
      category: "Preparing Your Artwork",
      items: [
        "Focus on originality; avoid AI-generated components.",
        "Prioritize craftsmanship: neatness, careful media application, clean edges.",
        "Choose your medium strategically: Mixed media, bright paintings, and oil pastels often do well for younger students.",
        "Balance technical skill with emotional impact to appeal to both judge types.",
        "Document your creative process (sketches, photos), especially for digital or complex pieces."
      ],
    },
    {
      category: "Working with Your Art Teacher",
      items: [
        "Build a positive relationship: show enthusiasm, ask questions, participate actively.",
        "Complete assignments thoroughly and show consistent improvement.",
        "Understand your teacher is looking for the 5 key judging criteria in your work.",
        "Seek guidance on improving techniques, not just on getting selected.",
        "Be mindful of when your teacher might be making selections for the show."
      ],
    },
    {
      category: "Age-Specific Tips",
      items: [
        "K-3: Focus on joyful, expressive work with bright colors. Excellence awards offer good recognition odds.",
        "4-6 (Sweet Spot): Balance emerging technical skills with creativity. Aim for understanding art concepts.",
        "Middle/High School: Higher technical skill expected. Aim for conceptual depth and a distinctive style."
      ],
    },
  ];

  return (
    <section className="my-8 md:my-12">
      <SectionTitle>Student Success Checklist</SectionTitle>
      <div className="bg-white rounded-lg shadow-md p-4 md:p-6 space-y-6">
        <p className="text-sm md:text-base text-gray-700">
          Want to get your artwork selected for the P-CCS Art Show? Here's a quick checklist to guide you!
        </p>
        {checklistItems.map((categoryItem, catIdx) => (
          <div key={catIdx} className="bg-indigo-50 p-3 md:p-4 rounded-lg">
            <h4 className="text-md md:text-lg font-semibold text-indigo-800 mb-2 md:mb-3">{categoryItem.category}</h4>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              {categoryItem.items.map((item, itemIdx) => (
                <li key={itemIdx} className="flex items-start">
                  <svg className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-4 text-center">
            <p className="text-xs md:text-sm text-gray-600 italic">Remember: The most important thing is to enjoy the creative process and do your best!</p>
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

export default App;