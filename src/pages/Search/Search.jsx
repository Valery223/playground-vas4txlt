import { useEffect, useState } from "react";

import { fetchSearchData } from "../../api/api";

import { Photo } from "./Components";

import s from "./Search.module.css";

export function Search() {
  const [searchData, setSearchData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSearchData();
        setSearchData(data);
      } catch (error) {
        console.log("handle error!!!");
        //set default data
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.mainWrapper}>
      <div className={s.photoWrapper}>
        <Photo />
      </div>
      {searchData ? (
        <div className={s.textWrapper}>
          <div>
            <h1>
              {searchData.name} {searchData.age}
            </h1>{" "}
          </div>
          <div className={s.textTabs}>
            <h2>Описание</h2>
            <p>{searchData.description}</p>
          </div>
          <div className={s.textTabs}>
            <h2>Личная информация</h2>
            <p>{searchData.description}</p>
          </div>
        </div>
      ) : (
        <p>Loading searchData...</p>
      )}
    </div>
  );
}
