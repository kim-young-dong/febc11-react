import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between comments-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src={
            comment?.user?.image ||
            "https://api.fesp.shop/files/00-sample/user-muzi.webp"
          }
          alt="어피치 프로필 이미지"
        />
        <Link to="" className="text-orange-400">
          {comment.user.name}
        </Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">
          {comment.createdAt}
        </time>
      </div>
      <div className="flex justify-between comments-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">{comment.content}</pre>
          <button
            type="submit"
            className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          >
            삭제
          </button>
        </form>
      </div>
    </div>
  );
}