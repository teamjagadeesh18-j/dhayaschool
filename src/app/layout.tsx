
import type { Metadata } from 'next';
import { SmoothScrollProvider } from "@/components/ui/smooth-scroll-provider";
import { Manrope, Inter } from 'next/font/google';
import './globals.css';
import { LenisSmoothScroll } from '@/components/ui/lenis-smooth-scroll';
import { WhatsAppFloat } from '@/components/ui/whatsapp-float';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-heading',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Dhaya Matriculation School | Thiruninravur, MGR Nagar',
  description: 'Dhaya Matriculation School in Thiruninravur, MGR Nagar delivers accessible matriculation education within the Avadi Educational Circle.',
  keywords: ['Dhaya Matriculation School', 'Thiruninravur school', 'Avadi Educational Circle school'],
  alternates: {
    canonical: 'https://dhayamatric.edu.in',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'School'],
  name: 'Dhaya Matriculation School',
  url: 'https://dhayamatric.edu.in',
  telephone: '+914426343040',
  email: 'dhayamatric.thiruninravur@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Avadi Educational Circle, MGR Nagar',
    addressLocality: 'Thiruninravur',
    addressRegion: 'Tamil Nadu',
    postalCode: '60',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 13.13081,
    longitude: 80.05389,
  },
  hasMap: 'https://maps.google.com/?q=13.13081,80.05389',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-[#F8FAFC] text-[#475569] antialiased min-h-screen">
        <SmoothScrollProvider>
        <LenisSmoothScroll>
          {children}
          <WhatsAppFloat />
        </LenisSmoothScroll>
              </SmoothScrollProvider>
</body>
    </html>
  );
}