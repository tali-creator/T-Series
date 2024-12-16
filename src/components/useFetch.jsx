import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [dataIsPending, setDataIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    setDataIsPending(true);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setDataIsPending(false);
      })
      .catch((error) => {
        setError("Error fetching data");
        setDataIsPending(false);
      });
  }, [url]);

  return { data, dataIsPending, error };
}
