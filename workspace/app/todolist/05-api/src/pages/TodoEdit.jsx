import {
  Link,
  useOutletContext,
  useParams,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosInstance from "@hooks/useAxiosInstance";

function TodoEdit() {
  const [todo, setTodo] = useState();

  const { _id } = useParams();
  const { todoItem, refetch } = useOutletContext();

  const axios = useAxiosInstance();
  const navigate = useNavigate();

  useEffect(() => {
    setTodo(todoItem);
  }, [todoItem]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit", // 최초 검증 시점, default onSubmit
    reValidateMode: "onChange", // 재검증 시점, default onChange
    criteriaMode: "firstError", // 검증 에러가 발생할 경우 errors 객체의 필드 속성에 첫 오류 하나만 포함하거나(firstError) 전부 포함(all), default firstError
    defaultValues: {
      ...todoItem,
    },
  });

  const onSubmit = (formData) => {
    axios
      .patch(`todolist/${_id}`, {
        title: formData.title,
        content: formData.content,
        done: formData.done,
      })
      .then(() => {
        alert("수정되었습니다.");
        refetch();
        navigate(`/list/${_id}`);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <h2>할일 수정</h2>
      {todo && (
        <div className="todo">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="title">제목 :</label>
            <input
              type="text"
              id="title"
              autoFocus
              {...register("title", {
                required: "제목을 입력해주세요.",
              })}
            />
            <div>{errors.title?.message}</div>
            <br />
            <label htmlFor="content">내용 :</label>
            <textarea
              id="content"
              cols="23"
              rows="5"
              {...register("content", {
                required: "제목을 입력해주세요.",
              })}
            ></textarea>
            <div>{errors.content?.message}</div>
            <br />
            <label htmlFor="done">완료 :</label>
            <input type="checkbox" id="done" {...register("done")} />
            <br />
            <button type="submit">수정</button>
            <Link to={"/list"}>취소</Link>
          </form>
        </div>
      )}
    </>
  );
}

export default TodoEdit;
