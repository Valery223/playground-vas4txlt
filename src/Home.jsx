import { useEffect, useState } from "react";
import { fetchSearchData } from "./api/api";

export function Home({}) {
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
    <div>
      <h1>Home</h1>
      {searchData ? (
        <div>
          <p>
            {searchData.first_name} {searchData.last_name}
          </p>
          <p>Email: {searchData.email}</p>
          <img
            src={searchData.avatar}
            alt={`${searchData.first_name} ${searchData.last_name}`}
          />
        </div>
      ) : (
        <p>Loading searchData...</p>
      )}
    </div>
  );
}
