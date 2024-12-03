import axios from "axios";

function useAxiosInstance() {
  const instance = axios.create({
    baseURL: "https://11.fesp.shop",
    headers: {
      "Contant-Type": "application/json",
      "client-id": "vanilla01",
    },
  });

  // 요청 인터셉터 추가하기
  axios.interceptors.request.use(
    (config) => {
      // 요청이 전달되기 전에 필요한 공통 작업 수행

      return config;
    },
    (error) => {
      // 공통 에러 처리

      return Promise.reject(error);
    }
  );

  // 응답 인터셉터 추가하기
  axios.interceptors.response.use(
    (response) => {
      // 2xx 범위에 있는 상태 코드는 이 함수가 호출됨
      // 응답 데이터를 이용해서 필요한 공통 작업 수행

      return response;
    },
    (error) => {
      // 2xx 외의 범위에 있는 상태 코드는 이 함수가 호출됨
      // 공통 에러 처리

      return Promise.reject(error);
    }
  );

  return instance;
}

export default useAxiosInstance;
