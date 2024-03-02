import React, { ReactNode } from 'react';
import Header from './components/Header';
import './globals.css';
import { Viewport } from 'next';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

// META DATA
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};
export async function generateMetadata() {
  return {
    title: 'Dynamic Weather App | Mohammad Kikhia',
    description: 'TODO:',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        notranslate: true,
        'max-image-preview': 'large',
      },
    },
    applicationName: 'title',
    keywords: [
      'Mohammad Kikhia',
      'محمد كيخيا',
      'Frontend Developer',
      'مطور ويب',
      'ReactJS',
      'رياكت جي اس',
      'NextJS',
      'نيكست جي اس',
      'Web Development',
      'تطوير الويب',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Syria',
      'سوريا',
      'Latakia',
      'Lattakia',
      'اللاذقية',
      'User Interface',
      'User Experience',
      'UI',
      'UX',
      'Responsive Design',
      'Version Control',
      'Git',
      'GitHub',
      'Node.js',
      'JSON',
      'REST API',
      'Redux',
      'SSR',
      'Server Side Rendering',
      'SEO',
      'Search Engine Optimization',
    ],
    authors: [
      { name: 'author' },
      { name: 'author', url: 'https://mohammad-kikhia.vercel.app' },
    ],
    category: 'technology',
    publisher: 'author',
    creator: 'author',
    twitter: {
      card: 'title',
      title: 'title',
      description: 'description',
      images: ['../favicon.svg'],
    },
    openGraph: {
      title: 'title',
      description: 'description',
      siteName: 'title',
      url: 'https://dynamic-weather-app-next13.vercel.app/',
      images: [
        {
          url: '../favicon.svg',
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
