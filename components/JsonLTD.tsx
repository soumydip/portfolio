export function StructuredData() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://soumyadip.ucoder.in/#person",
      name: "Soumyadip Maity",
      url: "https://soumyadip.ucoder.in/",
      image:
        "https://res.cloudinary.com/dkqi9h8yw/image/upload/v1768277924/qcywx8qervf0iirwbmvu.png",
      sameAs: [
        "https://www.ucoder.in",
        "https://www.github.com/soumydip",
        "https://insights.ucoder.in",
        "https://www.linkedin.com/in/soumyadip-maity-183ba3310",
        "https://twitter.com/soumyadip2maity",
        "https://www.instagram.com/soumyadip2912",
        "https://www.facebook.com/share/17ZUJY8DMC",
      ],
      jobTitle: "Full Stack Developer",
      description:
        "Full Stack Developer specializing in MERN stack, Next.js, Typescript and AI solutions.",
      worksFor: {
        "@id": "https://insights.ucoder.in/#organization",
      },
      brand: {
        "@id": "https://insights.ucoder.in/#organization", 
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Swami Vivekananda University",
        url: "https://swamivivekanandauniversity.ac.in/",
      },
      knowsAbout: [
        "Full Stack Development",
        "MERN Stack",
        "Next.js",
        "React.js",
        "Node.js",
        "Python",
        "Artificial Intelligence",
        "TypeScript",
        "MongoDB",
        "Express.js",
        "Data Structures and Algorithms",
        "REST APIs",
        "Cloud Deployment",
        "SQL",
        "Redis",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN",
      },
      email: "mailto:maitysoumyadip22@gmail.com",
      gender: "Male",
      nationality: "Indian",
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://insights.ucoder.in/#software",
      name: "Ucoder Insights",
      url: "https://insights.ucoder.in",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      description:
        "Open-source, privacy-first analytics SDK — track page views, custom events, and Core Web Vitals in real-time.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@id": "https://soumyadip.ucoder.in/#person",
      },
      sameAs: [
        "https://www.npmjs.com/package/ucoder-insight" 
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://soumyadip.ucoder.in/#website",
      name: "Soumyadip Maity - Portfolio",
      url: "https://soumyadip.ucoder.in/",
      description:
        "Soumyadip Maity is a Full Stack Developer specializing in MERN stack, Next.js, Typescript and AI solutions.",
      author: {
        "@id": "https://soumyadip.ucoder.in/#person",
      },
      publisher: {
        "@id": "https://soumyadip.ucoder.in/#person",
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://insights.ucoder.in/#organization", 
      name: "Ucoder",
      url: "https://insights.ucoder.in",
      logo: "https://res.cloudinary.com/dkqi9h8yw/image/upload/v1768277924/qcywx8qervf0iirwbmvu.png",
      sameAs: [
        "https://www.ucoder.in",
        "https://www.github.com/soumydip",
        "https://insights.ucoder.in",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "contact@ucoder.in",
      },
      founder: {
        "@id": "https://soumyadip.ucoder.in/#person",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}