import useAxiosInstance from "@hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import InputError from "@components/InputError";

export default function CommentNew() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const axios = useAxiosInstance();
  const { type, _id } = useParams();

  const queryClient = useQueryClient();

  const addComment = useMutation({
    mutationFn: (formData) => {
      const body = {
        content: formData.comment,
      };
      return axios.post(`/posts/${_id}/replies`, body);
    },
    onSuccess: () => {
      alert("댓글이 등록되었습니다.");
      reset();
      queryClient.invalidateQueries({ queryKey: ["posts", _id] });
      navigate(`/posts/${_id}`);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
      <form onSubmit={handleSubmit(addComment.mutate)}>
        <div className="mb-4">
          <textarea
            rows="3"
            cols="40"
            className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="내용을 입력하세요."
            name="comment"
            {...register("comment", { required: "내용은 필수입니다." })}
          ></textarea>

          <InputError target={errors.comment} />
        </div>
        <button
          type="submit"
          className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
        >
          댓글 등록
        </button>
      </form>
    </div>
  );
}
