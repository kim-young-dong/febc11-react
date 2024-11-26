import { useState, useEffect } from "react";

const BASE_URL = "https://todo-api.fesp.shop/api";

function useFetch(fetchParams, method = "GET") {
  const [data, setData] = useState(null); // data state
  const [error, setError] = useState(null); // error state
  const [isLoading, setIsLoading] = useState(false); // loading state

  useEffect(() => {
    request(fetchParams);
  }, []);

  const request = async (params) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/${params}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      // console.log(res);
      const data = await res.json();

      if (data.ok) {
        setData(data.items || data.item);
        setError(null);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      console.error(error);
      setData(null);
      setError("데이터를 불러오는 중에 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading };
}

export default useFetch;
