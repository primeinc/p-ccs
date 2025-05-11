import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = 'P-CCS K-12 Art Show | Student Creativity Spotlight',
  description = 'Join us at Salem High on May 17, 2025 for the P-CCS Art Show featuring 2,000+ artworks from K-12 students. Live demos, awards, and more!',
  canonicalUrl = 'https://primeinc.github.io/p-ccs/',
  type = 'website',
  image = '/p-ccs/images/p-css-spotlight.png', // Updated to include the base path
  imageAlt = 'P-CCS K-12 Art Show Banner',
  children
}) {
  const siteUrl = 'https://primeinc.github.io';
  const fullUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`;
  
  // Handle absolute vs relative image paths
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index,follow" />
      
      {/* Safari Reader Mode compatibility */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />
      
      {/* Structured Data / JSON-LD for Event */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "P-CCS K-12 Art Show 2025",
            "startDate": "2025-05-17T11:30:00-04:00",
            "endDate": "2025-05-17T16:00:00-04:00",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "location": {
              "@type": "Place",
              "name": "Salem High School Cafeteria",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "46181 Joy Rd",
                "addressLocality": "Canton",
                "addressRegion": "MI",
                "postalCode": "48187",
                "addressCountry": "US"
              }
            },
            "image": [
              "${imageUrl}"
            ],
            "description": "${description}",
            "organizer": {
              "@type": "Organization",
              "name": "Plymouth-Canton Community Schools",
              "url": "https://www.pccsk12.com"
            }
          }
        `}
      </script>
      
      {/* WebPage structure for reader mode */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "${title}",
            "description": "${description}",
            "url": "${fullUrl}",
            "mainEntity": {
              "@type": "Article",
              "headline": "P-CCS K-12 Art Show",
              "description": "${description}",
              "image": "${imageUrl}",
              "author": {
                "@type": "Organization",
                "name": "Plymouth-Canton Community Schools"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Plymouth-Canton Community Schools",
                "logo": {
                  "@type": "ImageObject",
                  "url": "${siteUrl}/p-ccs/images/p-css-spotlight.png"
                }
              },
              "mainEntityOfPage": "${fullUrl}",
              "articleSection": [
                "Event Overview",
                "Event Details",
                "Event Schedule",
                "Participation",
                "Judging Process",
                "Submission Guidelines"
              ]
            }
          }
        `}
      </script>
      
      {children}
    </Helmet>
  );
} 