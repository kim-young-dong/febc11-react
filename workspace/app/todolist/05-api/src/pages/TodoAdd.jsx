import { Link, useNavigate } from "react-router-dom";
import useAxiosInstance from "@hooks/useAxiosInstance";
import { useForm } from "react-hook-form";

const errorStyle = {
  fontSize: "12px",
  color: "red",
  fontWeight: "bold",
};

function TodoAdd() {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", // 최초 검증 시점, default onSubmit
    reValidateMode: "onChange", // 재검증 시점, default onChange
    criteriaMode: "firstError", // 검증 에러가 발생할 경우 errors 객체의 필드 속성에 첫 오류 하나만 포함하거나(firstError) 전부 포함(all), default firstError
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const axios = useAxiosInstance();

  const navigate = useNavigate();

  const onSubmit = (item) => {
    console.log("서버에 전송", item);

    axios.post("todolist", item).then((response) => {
      console.log(response);
      alert("할일이 추가되었습니다.");
      reset();
      setFocus("title");
      navigate(`/list/${response.data.item._id}`);
    });

    // const xhr = new XMLHttpRequest();

    // xhr.open("POST", "https://todo-api.fesp.shop/api/todolist");
    // xhr.setRequestHeader("Content-Type", "application/json");

    // xhr.responseType = "json";

    // xhr.onload = () => {
    //   console.log(xhr.status);
    //   if (200 >= xhr.status && xhr.status < 300) {
    //     alert("할일이 추가되었습니다.");
    //     reset();
    //     setFocus("title");
    //     console.log(xhr.response);

    //     navigate(`/list/${xhr.response.item._id}`);
    //     // window.location.href = "/list";
    //     // router.push(`/list`);
    //   } else {
    //     alert(xhr.response.error?.message || "할 일 추가에 실패했습니다.");
    //     console.log(xhr.response);
    //   }
    // };

    // xhr.onerror = () => {
    //   alert("서버와 통신이 원활하지 않습니다.");
    //   console.log(xhr.response);
    // };

    // xhr.send(JSON.stringify(item));
  };

  return (
    <>
      <main id="main">
        <h2>할일 추가</h2>
        <div className="todo">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">제목 :</label>
            <input
              type="text"
              id="title"
              autoFocus
              {...register("title", {
                required: "제목을 입력해주세요.",
                minLength: {
                  value: 2,
                  message: "제목은 2자 이상 입력해주세요.",
                },
              })}
            />
            <div style={errorStyle}>{errors.title?.message}</div>
            <br />
            <label htmlFor="content">내용 :</label>
            <textarea
              id="content"
              cols="23"
              rows="5"
              {...register("content", {
                required: "내용을 입력해주세요.",
              })}
            ></textarea>
            <div style={errorStyle}>{errors.content?.message}</div>
            <br />
            <button type="submit">추가</button>
            <Link to={"/list"}>취소</Link>
          </form>
        </div>
      </main>
    </>
  );
}

export default TodoAdd;
