// custom hook

import { useState, useEffect } from "react";

const useJSON = (url) => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    // useEffect to fetch data from json server
    // line 7 - 8 handles fetch error based on response object
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error('oops, could not find the data you requested for')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
            })
    }, [url]);

    return { data, error }
}

export default useJSON;