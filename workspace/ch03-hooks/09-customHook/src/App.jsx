import Header from "@components/Header";
import ScaleLoader from "react-spinners/ScaleLoader";
import useFetch from "@hooks/useFetch";
import useAxios from "@hooks/useAxios";

function App() {
  // const { data, error, isLoading } = useFetch("todolist?delay=2000");
  const { data, error, isLoading } = useAxios("todolist?delay=1000");

  return (
    <>
      <Header title="08 customHook2" />
      {isLoading && <ScaleLoader color="#62afff" />}
      {error && <p>{error.message}</p>}
      {data && (
        <ul>
          {data.map((item) => (
            <li key={item["_id"]}>
              {item.title} - {item.done ? "완료" : "미완료"}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
