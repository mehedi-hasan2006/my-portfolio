export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mdmehedi.vercel.app/#about",
        name: "Md. Mehedi Hasan",
        givenName: "Mehedi",
        familyName: "Hasan",
        url: "https://mdmehedi.vercel.app",
        image: "https://mdmehedi.vercel.app/profile.png",
        description:
          "MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB & Computer Science Student",
        jobTitle: "MERN Stack Developer",
        gender: "Male",
        birthDate: "2006",
        nationality: "Bangladeshi",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhurungamari, Kurigram",
          addressCountry: "BD",
        },
        sameAs: [
          "https://github.com/mehedi-hasan2006",
          "https://www.linkedin.com/in/mehedi-hasan-2006",
          "https://www.facebook.com/mdmehedi.hasan2006",
        ],
        knowsAbout: [
          "Web Development",
          "React.js",
          "Next.js",
          "Node.js",
          "MongoDB",
          "JavaScript",
          "TypeScript",
          "TailwindCSS",
          "Express.js",
          "REST APIs",
          "Computer Science Student",
        ],
        alumniOf: [
          {
            "@type": "EducationalOrganization",
            name: "Kurigram Polytechnic Institute",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://mdmehedi.vercel.app/#about",
        url: "https://mdmehedi.vercel.app",
        name: "Mehedi Hasan Portfolio",
        description: "MERN Stack Developer Portfolio Website",
        publisher: {
          "@id": "https://mdmehedi.vercel.app/#about",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mdmehedi.vercel.app/#about",
        url: "https://mdmehedi.vercel.app/",
        name: "Mehedi Hasan | MERN Stack Developer",
        isPartOf: {
          "@id": "https://mdmehedi.vercel.app/#about",
        },
        about: {
          "@id": "https://mdmehedi.vercel.app/#about",
        },
        datePublished: "2025-03-08T12:32:49+06:00",
        dateModified: new Date().toISOString(),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
