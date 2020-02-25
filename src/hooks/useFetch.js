import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        //Fetching the http get
        const res = await fetch(url, options);
        //Transforming the result into a JSON
        const json = await res.json();
        //Asigning result to state
        setResult(json);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [options, url]);
  return { loading, result, error };
}
