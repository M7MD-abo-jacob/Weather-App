import { Viewport } from 'next';
import React, { ReactNode } from 'react';
import Search from '@/components/header/Search';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" dir="ltr">
      <body className="">
        <header>
          <Search />
        </header>
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
  const metaObject = {
    title: 'Dynamic Weather App | Mohammad Kikhia',
    description:
      'Get accurate weather forecasts, live updates, and more on our comprehensive weather portal. Plan your day with confidence!',
    author: 'Mohammad Kikhia - محمد كيخيا',
    img: '/assets/main.png',
  };
  return {
    title: metaObject.title,
    description: metaObject.description,
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
    applicationName: metaObject.title,
    keywords: [
      metaObject.author,
      metaObject.title,
      'Mohammad Kikhia',
      'محمد كيخيا',
      'Weather forecast',
      'Dynamic Weather',
      'Temperature ranges',
      'Summer weather trends',
      'Outdoor activities',
      'Weather radar',
      'rain',
      'snow',
      'sun',
      'moon',
      'clouds',
      'NextJS',
      'Syria',
      'سوريا',
      'Latakia',
      'اللاذقية',
    ],
    authors: [
      { name: metaObject.author, url: 'https://mohammad-kikhia.vercel.app' },
    ],
    category: 'weather',
    publisher: metaObject.author,
    creator: metaObject.author,
    twitter: {
      card: metaObject.title,
      title: metaObject.title,
      description: metaObject.description,
      images: [metaObject.img],
    },
    openGraph: {
      title: metaObject.title,
      description: metaObject.description,
      siteName: metaObject.title,
      url: 'https://dynamic-weather-app-next13.vercel.app/',
      images: [
        {
          url: metaObject.img,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}
