import Link from "next/link";
import { BASE_URL, HEADERS } from "@/config/index";

async function fetchPost(_id) {
  console.log("fetchPost from CommentList");

  const response = await fetch(`${BASE_URL}/posts/${_id}`, {
    headers: HEADERS,
  });
  return await response.json();
}

const CommentListItem = ({ item }) => {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        {item.user.image && (
          <img
            className="w-8 mr-2 rounded-full"
            src={`https://11.fesp.shop${item.user.image.path}`}
            alt={`${item.user.name} 프로필 이미지`}
          />
        )}
        <Link href="/" className="text-orange-400">
          {item?.user?.name || "익명"}
        </Link>
        <time className="ml-auto text-gray-500" dateTime={`${item.createdAt}`}>
          {item.createdAt}
        </time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <pre className="whitespace-pre-wrap text-sm">{item.content}</pre>

        <button
          type="button"
          className="bg-red-500 py-1 px-2 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default async function CommentList({ _id }) {
  const { item } = await fetchPost(_id);

  const commentList =
    item.replies &&
    item.replies.map((item) => {
      return <CommentListItem key={item._id} item={item} />;
    });
  return <>{commentList}</>;
}
