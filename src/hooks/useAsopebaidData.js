import { useState, useEffect } from "react";

export const useAsopebaidData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://asopebaid.org.pe/data/asopebaidData.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No de cargo la dara");
        }
        return res.json();
      })
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error");
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
