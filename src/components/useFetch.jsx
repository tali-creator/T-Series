import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [dataIsPending, setDataIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setDataIsPending(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setData(data);
        setDataIsPending(false);
        console.log(data)
      } catch (err) {
        console.error(err);
        setError("Error fetching data");
        setDataIsPending(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, dataIsPending, error };
}
