'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SearchResult } from '@/types';
import getCitiesResults from '@/lib/api/getCitiesResults';
import styles from './Search.module.css';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const delay = 500;
  // throttle requests while user is typing
  useEffect(() => {
    // no need to fetch if search bar is empty or less than 3 characters
    // auto complete api needs at least 3 characters
    if (searchValue.length < 3) {
      setSearchResult([]);
      return;
    }

    // else, search for matching cities
    const getData = setTimeout(async () => {
      try {
        const res = await getCitiesResults(searchValue);
        if (!!res) {
          setSearchResult(res);
        }
      } catch (error) {
        // display nothing!
        console.log('error', error);
      }
    }, delay);

    // cleanup: clear timeout
    return () => clearTimeout(getData);
  }, [searchValue]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <input
        className={styles.search}
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a city..."
      />
      {/* ---------- CITIES LIST ---------- */}
      {searchResult?.length > 0 && (
        <ul className={styles.search_list}>
          {searchResult.map((city: SearchResult, i: number) => (
            <li key={i}>
              <Link
                href={`/city/${city.value}`}
                replace
                onClick={() => {
                  setSearchValue('');
                }}>
                {city.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
