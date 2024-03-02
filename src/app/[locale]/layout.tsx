import React, { ReactNode } from 'react';
import LanguageChanger from '@/components/shared/LanguageChanger';
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';
import Header from './components/Header';
import '../globals.css';
import { Viewport } from 'next';

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

interface Params {
  locale: string;
}

interface RootLayoutProps {
  children: ReactNode;
  params: Params;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  children,
  params: { locale },
}) => {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className="">
        <Header />
        {children}
      </body>
      {/* <LanguageChanger /> */}
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
interface CustomRequest extends Request {
  params: {
    [lang: string]: string;
  };
}
export async function generateMetadata(req: CustomRequest) {
  // const lang = req?.params?.lang || 'en';
  // TODO: trans
  // const dictionary = await getDictionary(lang, ['home']);
  // const metaData = dictionary.home.common.metadata;
  return {
    title: 'title',
    description: 'description',
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
