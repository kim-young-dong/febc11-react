import PropTypes from "prop-types";
import CommentListItem from "@pages/board/CommentListItem";
import CommentNew from "@pages/board/CommentNew";

CommentList.propTypes = {
  comments: PropTypes.array,
};

export default function CommentList({ comments }) {
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {comments.length}개</h4>

      {comments.map((comment) => (
        <CommentListItem key={comment["_id"]} comment={comment} />
      ))}

      <CommentNew />
    </section>
  );
}
