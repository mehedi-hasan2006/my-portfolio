
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mehedihasan.dev/#person",
        name: "Mehedi Hasan",
        givenName: "Mehedi",
        familyName: "Hasan",
        url: "https://mehedihasan.dev",
        image: "https://mehedihasan.dev/profile.jpg",
        description:
          "MERN Stack Developer specializing in React, Next.js, Node.js, and MongoDB",
        jobTitle: "MERN Stack Developer",
        gender: "Male",
        birthDate: "2006",
        nationality: "Bangladeshi",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kurigram",
          addressCountry: "BD",
        },
        sameAs: [
          "https://github.com/mehedi-hasan2006",
          "https://linkedin.com/in/mehedihasan",
          "https://twitter.com/mehedihasan",
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
        "@id": "https://mehedihasan.dev/#website",
        url: "https://mehedihasan.dev",
        name: "Mehedi Hasan Portfolio",
        description: "MERN Stack Developer Portfolio Website",
        publisher: {
          "@id": "https://mehedihasan.dev/#person",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": "https://mehedihasan.dev/#webpage",
        url: "https://mehedihasan.dev",
        name: "Mehedi Hasan | MERN Stack Developer",
        isPartOf: {
          "@id": "https://mehedihasan.dev/#website",
        },
        about: {
          "@id": "https://mehedihasan.dev/#person",
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