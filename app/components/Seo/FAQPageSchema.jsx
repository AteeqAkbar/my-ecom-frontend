import React from "react";

const FAQPageSchema = ({ faqs }) => {
  const faqsData = faqs?.map(({ Question, Answer }) => ({
    "@type": "Question",
    name: Question,
    acceptedAnswer: {
      "@type": "Answer",
      text: Answer,
    },
  }));

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsData,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    ></script>
  );
};

export default FAQPageSchema;
