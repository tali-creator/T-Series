import { useEffect, useState } from "react"

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [dataIspending, setDataIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error("Unable to fetch Data from the api")
            }
           return res.json()
        })
        .then(data => {
            setData(data);
            setDataIsPending(false);
            setError(null)
        })
        .catch((err) => {
            setError(err.message)
            setDataIsPending(false)
        })

    }, [url])

  return {data , dataIspending, error}
}
