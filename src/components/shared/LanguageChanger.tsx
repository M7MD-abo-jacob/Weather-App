'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import React, { ChangeEvent, FC } from 'react';

const LanguageChanger: FC = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const { push, refresh } = useRouter();
  const pathname = usePathname();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    document.cookie = `NEXT_LOCALE=${newLocale};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      push('/' + newLocale + pathname);
    } else {
      push(pathname.replace(`/${currentLocale}`, `/${newLocale}`));
    }

    refresh();
    // window.location.reload();
  };

  return (
    <select onChange={handleChange} value={currentLocale}>
      {/* TODO: HYDRATION SHIT */}
      <option value="en">English</option>
      <option value="ar">Arabic</option>
    </select>
  );
};

export default LanguageChanger;
