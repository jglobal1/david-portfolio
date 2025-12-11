import { useEffect } from "react";

const SEO = () => {
  useEffect(() => {
    // Structured Data - Person
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Olarewaju David Oluwatimilehin",
      "alternateName": "Olarewaju David",
      "jobTitle": "Virtual Executive Assistant",
      "description": "Certified Virtual Executive Assistant specializing in LinkedIn engagement, calendar management, and administrative support for coaches and business owners.",
      "url": "https://olarewajudavid.com",
      "image": "https://olarewajudavid.com/profile%20pic.jpg",
      "email": "orlarewajudavid@gmail.com",
      "telephone": "+2349063339281",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bauchi",
        "addressCountry": "NG"
      },
      "sameAs": [
        "https://www.linkedin.com/in/oladave",
        "https://x.com/OrlarewajuDave",
        "https://www.instagram.com/orlaviid"
      ],
      "knowsAbout": [
        "Virtual Assistance",
        "LinkedIn Marketing",
        "Calendar Management",
        "Email Management",
        "Administrative Support",
        "Client Communication",
        "Data Entry",
        "Business Operations"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Professional Diploma",
          "name": "Professional Diploma in Virtual Executive Assistant",
          "recognizedBy": {
            "@type": "Organization",
            "name": "MTF Institute of Management, Technology and Finance"
          }
        }
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Abubakar Tafawa Balewa University"
      }
    };

    // Structured Data - ProfessionalService
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Virtual Executive Assistant Services",
      "description": "Professional virtual assistant services including LinkedIn engagement, calendar management, email organization, and administrative support.",
      "provider": {
        "@type": "Person",
        "name": "Olarewaju David Oluwatimilehin"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
      },
      "serviceType": [
        "Virtual Assistant Services",
        "LinkedIn Management",
        "Calendar Management",
        "Email Management",
        "Administrative Support",
        "Data Entry",
        "Client Communication"
      ],
      "offers": {
        "@type": "Offer",
        "description": "Virtual Executive Assistant services helping businesses save 30+ hours per week",
        "availability": "https://schema.org/InStock"
      }
    };

    // Structured Data - LocalBusiness
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Olarewaju David - Virtual Executive Assistant",
      "image": "https://olarewajudavid.com/profile%20pic.jpg",
      "description": "Professional Virtual Executive Assistant services in Bauchi, Nigeria. Expert in LinkedIn engagement, calendar management, and administrative support.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bauchi",
        "addressRegion": "Bauchi State",
        "addressCountry": "NG"
      },
      "telephone": "+2349063339281",
      "email": "orlarewajudavid@gmail.com",
      "url": "https://olarewajudavid.com",
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    };

    // Structured Data - BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://olarewajudavid.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://olarewajudavid.com#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "My Work",
          "item": "https://olarewajudavid.com#my-work"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "About",
          "item": "https://olarewajudavid.com#about"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Contact",
          "item": "https://olarewajudavid.com#contact"
        }
      ]
    };

    // Structured Data - FAQPage
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Olarewaju David offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olarewaju David offers comprehensive virtual executive assistant services including LinkedIn engagement, calendar management, email organization, administrative support, data entry, and client communication. He specializes in helping coaches and business owners save 30+ hours per week."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Olarewaju David located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olarewaju David is based in Bauchi, Nigeria, and provides virtual assistant services to clients worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "What certifications does Olarewaju David have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olarewaju David holds a Professional Diploma in Virtual Executive Assistant from MTF Institute of Management, Technology and Finance, and is certified by Abubakar Tafawa Balewa University."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Olarewaju David?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Olarewaju David via WhatsApp at +234 906 333 9281, email at orlarewajudavid@gmail.com, LinkedIn at linkedin.com/in/oladave, or through the contact form on this website."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Olarewaju David different from other virtual assistants?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olarewaju David is a certified Virtual Executive Assistant with specialized expertise in LinkedIn engagement and calendar management. He has helped clients achieve 300% network growth, scheduled 500+ meetings, and maintains 100% client satisfaction. His proven track record includes helping clients save 30+ hours per week."
          }
        }
      ]
    };

    // Add all schemas to the page
    const addSchema = (schema: object, id: string) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    // Remove existing schemas if they exist
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add all schemas
    addSchema(personSchema, "person-schema");
    addSchema(serviceSchema, "service-schema");
    addSchema(localBusinessSchema, "local-business-schema");
    addSchema(breadcrumbSchema, "breadcrumb-schema");
    addSchema(faqSchema, "faq-schema");

    return () => {
      // Cleanup on unmount
      const schemas = document.querySelectorAll('script[type="application/ld+json"]');
      schemas.forEach(schema => {
        if (schema.id?.startsWith("schema-")) {
          schema.remove();
        }
      });
    };
  }, []);

  return null;
};

export default SEO;

