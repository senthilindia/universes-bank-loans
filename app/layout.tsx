import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ChatbotWidget from '@/components/ChatbotWidget'

const siteUrl = 'https://universesloans.com'

export const metadata: Metadata = {
  title: {
    default: 'Loans in Coimbatore | Business, Home, Car Loan Tamil Nadu – Universes',
    template: '%s – Universes',
  },
  description: 'Best loan deals in Coimbatore, Tamil Nadu. Universes is an authorised channel partner for 15+ banks & NBFCs. Business loans, home loans, car loans, CGTMSE, collateral-free loans, loan against property. Lowest interest rates. Call +91 95431 40040.',
  keywords: ['loan in Coimbatore', 'business loan Coimbatore', 'home loan Coimbatore', 'car loan Coimbatore', 'CGTMSE loan Coimbatore', 'collateral free loan Coimbatore', 'mortgage loan Coimbatore', 'loan in Tamil Nadu', 'business loan Tamil Nadu', 'home loan Tamil Nadu', 'personal loan Coimbatore', 'best loan rates Coimbatore', 'NBFC Coimbatore', 'bank loan Coimbatore'],
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-IN': siteUrl,
    },
  },
  openGraph: {
    title: 'Loans in Coimbatore | Business, Home, Car Loan Tamil Nadu – Universes',
    description: 'Best loan deals in Coimbatore, Tamil Nadu. Authorised channel partner for 15+ banks & NBFCs. Business loans, home loans, car loans, CGTMSE.',
    url: siteUrl,
    siteName: 'Universes Bank Loans',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/universes-logo.png`,
        width: 1200,
        height: 630,
        alt: 'Universes — Loans in Coimbatore, Tamil Nadu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Loans in Coimbatore | Universes',
    description: 'Authorised channel partner for 15+ banks & NBFCs. Business, home, car, CGTMSE & collateral-free loans in Coimbatore.',
    images: [`${siteUrl}/universes-logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <meta name="theme-color" content="#9C2955" />
        <link rel="icon" href="/universes-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/universes-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body bg-cream text-charcoal antialiased">
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ChatbotWidget />
      </body>
    </html>
  )
}
