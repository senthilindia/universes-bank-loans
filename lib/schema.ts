import { COMPANY, contact, socialLinks } from './constants'

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: COMPANY.fullName,
    description: 'Best loan deals in Coimbatore, Tamil Nadu. Universes is an authorised channel partner for 15+ banks & NBFCs. Business loans, home loans, car loans, CGTMSE, collateral-free loans, loan against property. Lowest interest rates.',
    url: 'https://universesloans.com',
    telephone: '+91-95854 89999',
    email: contact.email,
    priceRange: '₹',
    image: 'https://universesloans.com/universes-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '105/1, Annapoorna Layout, New Siddhapudur',
      addressLocality: 'Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641044',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.0168',
      longitude: '76.9558',
    },
    areaServed: [
      { '@type': 'City', name: 'Coimbatore', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Tirupur', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Erode', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Salem', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Mettupalayam', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Pollachi', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Ooty', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Nilgiris', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Madurai', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Trichy', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Namakkal', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'City', name: 'Karur', containedInPlace: { '@type': 'State', name: 'Tamil Nadu' } },
      { '@type': 'State', name: 'Tamil Nadu' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      reviewCount: '150',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
    sameAs: [
      socialLinks.facebook,
      socialLinks.instagram,
      socialLinks.linkedin,
      socialLinks.youtube,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Loan Products in Coimbatore, Tamil Nadu',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Business Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '11% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Home Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '8.5% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Car Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '8.75% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'CGTMSE Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '11% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Loan Against Property in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '9% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Collateral-Free Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '12% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Personal Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '10.5% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Education Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '9% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Working Capital Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '11% onwards', priceCurrency: 'INR' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Gold Loan in Coimbatore' },
          priceSpecification: { '@type': 'PriceSpecification', price: '7% onwards', priceCurrency: 'INR' },
        },
      ],
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function loanPageSchema({
  name,
  description,
  url,
  interestRate,
  amount,
}: {
  name: string
  description: string
  url: string
  interestRate: string
  amount: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LoanOrCredit',
    name,
    description,
    url,
    provider: {
      '@type': 'FinancialService',
      name: COMPANY.fullName,
      url: 'https://universesloans.com',
      telephone: '+91-95854 89999',
    },
    amount: {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: amount,
    },
    interestRate: {
      '@type': 'QuantitativeValue',
      value: interestRate,
      unitText: 'per annum',
    },
    areaServed: {
      '@type': 'State',
      name: 'Tamil Nadu',
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
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
  }
}
