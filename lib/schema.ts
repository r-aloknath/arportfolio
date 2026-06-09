export const schemaMarkup = {
  serviceSchema: (service: { title: string; desc: string; index: number }) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.desc,
    provider: {
      '@type': 'Person',
      name: 'Aloknath Rath',
      url: 'https://aloknath.dev',
    },
  }),

  projectSchema: (project: { title: string; desc: string; tech: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.desc,
    keywords: project.tech,
    creator: {
      '@type': 'Person',
      name: 'Aloknath Rath',
    },
  }),

  organizationSchema: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aloknath Rath - Tech Consultant',
    url: 'https://aloknath.dev',
    email: 'aloknath.ar@gmail.com',
    description: 'Independent full-stack tech consultant specializing in Angular, React, Node.js',
  },

  breadcrumbSchema: (items: { name: string; url: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }),

  faqSchema: (faqs: { question: string; answer: string }[]) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),
};
