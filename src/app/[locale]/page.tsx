import React from 'react';
import ExampleClientComponent from '@/components/shared/ExampleClientComponent';
import initTranslations from '../i18n';
import TranslationsProvider from '@/components/shared/TranslationsProvider';
import styles from './page.module.css';

const i18nNamespaces = ['home'];

interface HomeProps {
  params: {
    locale: string;
  };
}

const Home: React.FC<HomeProps> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
      <main>
        <div className={styles.start}>
          <p>enter a city name or a part of it to start searching.</p>
          <div className={styles.ssvvgg}>
            {/* icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 430">
              <g style={{ isolation: 'isolate' }}>
                <g id="Warstwa_1" data-name="Warstwa 1">
                  <g>
                    <g>
                      <path
                        d="M296,88.45a146.88,146.88,0,1,1-207.72,0A146.88,146.88,0,0,1,296,88.45Z"
                        style={{ fill: '#9ce5f4' }}
                      />
                      <path
                        d="M387.64,381,301.1,295.91A150.38,150.38,0,0,0,85.77,86c-58.63,58.63-58.63,154,0,212.66a150.37,150.37,0,0,0,210.39,2.23L382.74,386a3.5,3.5,0,1,0,4.9-5ZM192.1,335.69a142.43,142.43,0,0,1-101.38-42c-55.91-55.9-55.91-146.86,0-202.76A143.37,143.37,0,1,1,192.1,335.69Z"
                        style={{ fill: '#000000' }}
                      />
                    </g>
                    <path
                      d="M108.1,108.31c52.73-52.74,140-53.62,197.41-9.11-3.07-3.74-6.35-7.38-9.85-10.88A146.46,146.46,0,0,0,88.54,295.45a149.67,149.67,0,0,0,14,12.33C55.39,250.25,54.4,162,108.1,108.31Z"
                      style={{
                        fill: '#9ce5f4',
                        opacity: 0.5,
                        mixBlendMode: 'multiply',
                      }}
                    />
                    <path
                      d="M82.2,150.88a3.54,3.54,0,0,1-1.31-.25A3.5,3.5,0,0,1,79,146.07a121.26,121.26,0,0,1,75.63-70,3.5,3.5,0,0,1,2.11,6.67,114.41,114.41,0,0,0-46.13,28.08,113.16,113.16,0,0,0-25.12,37.91A3.5,3.5,0,0,1,82.2,150.88Z"
                      style={{ fill: '#ebe6ef' }}
                    />
                    <rect
                      x="337.05"
                      y="307.4"
                      width="34.68"
                      height="93.56"
                      rx="10.53"
                      transform="translate(-146.64 354.33) rotate(-45)"
                      style={{ fill: '#e86830' }}
                    />
                    <path
                      d="M375.21,398.66a13.93,13.93,0,0,1-9.92-4.11L314,343.28a14,14,0,0,1,0-19.84l9.63-9.63a14.06,14.06,0,0,1,19.85,0l51.26,51.27a14,14,0,0,1,0,19.84l-9.63,9.63A13.93,13.93,0,0,1,375.21,398.66Zm-41.64-82a7,7,0,0,0-5,2.06L319,328.39a7,7,0,0,0,0,9.94l51.27,51.27a7,7,0,0,0,9.94,0l9.63-9.63a7,7,0,0,0,0-10l-51.26-51.26A7,7,0,0,0,333.57,316.7Zm58.72,65.75h0Z"
                      style={{ fill: '#000000' }}
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </main>
      <ExampleClientComponent />
      <h1>{t('test')}</h1>
    </TranslationsProvider>
  );
};

export default Home;
