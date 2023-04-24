import { useEffect, useState } from "react";
import Link from "next/link";
import getCitiesList from "@/app/lib/getCitiesList";
import styles from "./Search.module.css";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const delay = 500;
  // useEffect to throttle requests while user is typing
  useEffect(() => {
    // no need to fetch if search bar is empty
    if (searchValue === "") {
      setSearchResult([]);
      return;
    }

    // else, search for matching cities
    const getData = setTimeout(async () => {
      const res = await getCitiesList(searchValue);
      setSearchResult(res);
    }, delay);

    // useEffect cleanup: clear timeout
    return () => clearTimeout(getData);
  }, [searchValue]);

  return (
    <div>
      <input
        className={styles.search}
        type="search"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for a city"
      />
      {searchResult.length !== 0 && (
        <ul className={styles.search_list}>
          {searchResult.map((city, i) => {
            return (
              <li key={i}>
                <Link
                  href={`/city/${city.value}`}
                  replace
                  onClick={() => {
                    setSearchValue("");
                  }}
                >
                  {city.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
