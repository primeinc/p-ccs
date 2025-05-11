import { Helmet } from 'react-helmet-async';

export default function SEO({ 
  title = 'P-CCS K-12 Art Show | Student Creativity Spotlight',
  description = 'Join us at Salem High on May 17, 2025 for the P-CCS Art Show featuring 2,000+ artworks from K-12 students. Live demos, awards, and more!',
  canonicalUrl = 'https://primeinc.github.io/p-ccs/',
  type = 'website',
  image = 'https://primeinc.github.io/p-ccs/art-show-banner.svg', // Use SVG for higher quality where supported
  imageAlt = 'P-CCS K-12 Art Show Banner',
  children
}) {
  const siteUrl = 'https://primeinc.github.io/p-ccs';
  const fullUrl = `${siteUrl}${canonicalUrl}`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  
  return (
    <Helmet>
      {/* Standard metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index,follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={imageUrl} />
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
      
      {children}
    </Helmet>
  );
} 