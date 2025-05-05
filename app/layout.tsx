import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ossama Safa | Software Developer & Computer Science Graduate',
  description: 'Portfolio website of Osama Safa, a Software Developer and Computer Science graduate from the University of Debrecen. Showcasing projects in Java, JavaScript, and full-stack development.',
  keywords: ['Osama Safa', 'Software Developer', 'Computer Science', 'University of Debrecen', 'Java', 'JavaScript', 'Full Stack', 'Portfolio', 'Web Development'],
  authors: [{ name: 'Osama Safa' }],
  creator: 'Osama Safa',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    title: 'Osama Safa | Software Developer & Computer Science Graduate',
    description: 'Portfolio website of Osama Safa, showcasing projects and skills in software development.',
    siteName: 'Osama Safa Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osama Safa | Software Developer & Computer Science Graduate',
    description: 'Portfolio website of Osama Safa, showcasing projects and skills in software development.',
    creator: '@yourtwitter',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Osama Safa',
  jobTitle: 'Software Developer',
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University of Debrecen',
  },
  url: 'https://yourdomain.com',
  sameAs: [
    'https://github.com/SHTOZO',
    'https://www.linkedin.com/in/ossama-safa-266105305/',
  ],
  email: 'osamasafa@hotmail.com',
  description: 'Software Developer and Computer Science graduate from the University of Debrecen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} h-full`}>
        <ThemeProvider>
          <main className="min-h-full bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {children}
            <ThemeToggle />
            <BackToTop />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 