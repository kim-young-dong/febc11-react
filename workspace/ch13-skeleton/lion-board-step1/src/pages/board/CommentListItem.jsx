import useAxiosInstance from "@hooks/useAxiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { Link, useNavigate, useParams } from "react-router-dom";

CommentListItem.propTypes = {
  comment: PropTypes.shape({
    _id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
    }),
    createdAt: PropTypes.string.isRequired,
  }),
};

export default function CommentListItem({ comment }) {
  const axios = useAxiosInstance();
  const navigate = useNavigate();
  const { type, _id } = useParams();

  const queryClient = useQueryClient();

  const deleteComment = useMutation({
    mutationFn: () => {
      return axios.delete(`/posts/${_id}/replies/${comment._id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts", _id]);
      navigate(`/posts/${_id}`);
    },
    onError: (err) => {
      console.error(err);
    },
  });
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between comments-center mb-2">
        {comment.user.image && (
          <img
            className="w-8 mr-2 rounded-full"
            src={`https://api.fesp.shop${comment.user.image.path}`}
            alt={`${comment.user.name} 프로필 이미지`}
          />
        )}
        <Link to="" className="text-orange-400">
          {comment.user.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">
          {comment.createdAt}
        </time>
      </div>
      <div className="flex justify-between comments-center mb-2">
        <pre className="whitespace-pre-wrap text-sm">{comment.content}</pre>
        <button
          type="submit"
          className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          onClick={deleteComment.mutate}
        >
          삭제
        </button>
      </div>
    </div>
  );
}
