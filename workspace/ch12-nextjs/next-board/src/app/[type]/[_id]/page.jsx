import Link from "next/link";
import CommentList from "./CommentList";
// import CommentListItem from "@/app/[type]/[_id]/CommentItem";
import { BASE_URL, HEADERS } from "@/config/index";

async function fetchPost(_id) {
  console.log("fetchPost from Page");
  const response = await fetch(`${BASE_URL}/posts/${_id}`, {
    headers: HEADERS,
  });
  return await response.json();
}

export async function generateMetadata({ params }) {
  const { _id } = await params;
  const { item } = await fetchPost(_id);

  return {
    title: `${item.title}`,
    description: `${item.content}`,
  };
}

export default async function Page({ params }) {
  const { _id } = await params;
  const { item } = await fetchPost(_id);

  return (
    <>
      <main className="container mx-auto mt-4 px-4">
        <section className="mb-8 p-4">
          <form action="/info">
            <div className="font-semibold text-xl">{item.title}</div>
            <div className="text-right text-gray-400">
              작성자 : {item.user.name}
            </div>
            <div className="mb-4">
              <div>
                <pre className="font-roboto w-full p-2 whitespace-pre-wrap">
                  {item.content}
                </pre>
              </div>
              <hr />
            </div>
            <div className="flex justify-end my-4">
              <Link
                href="/info"
                className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
              >
                목록
              </Link>
              <Link
                href="/info/1/edit"
                className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
              >
                수정
              </Link>
              <button
                type="submit"
                className="bg-red-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
              >
                삭제
              </button>
            </div>
          </form>
        </section>

        <section className="mb-8">
          <h4 className="mt-8 mb-4 ml-2">댓글 {item.replies?.length || 0}개</h4>

          <CommentList _id={_id} />

          <div className="p-4 border border-gray-200 rounded-lg">
            <h4 className="mb-4">새로운 댓글을 추가하세요.</h4>
            <form action="#">
              <div className="mb-4">
                <textarea
                  rows="3"
                  cols="40"
                  className="block p-2 w-full text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="내용을 입력하세요."
                  name="comment"
                ></textarea>

                <p className="ml-2 mt-1 text-sm text-red-500">
                  내용은 필수입니다.
                </p>
              </div>
              <button
                type="submit"
                className="bg-orange-500 py-1 px-4 text-sm text-white font-semibold ml-2 hover:bg-amber-400 rounded"
              >
                댓글 등록
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
