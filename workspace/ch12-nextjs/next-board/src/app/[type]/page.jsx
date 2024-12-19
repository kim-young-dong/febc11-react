import Link from "next/link";
import ListItem from "./ListItem";
// import ListItem from "@/app/[type]/ListItem";
import Pagination from "@/components/Pagination";
import { BASE_URL, HEADERS } from "@/config/index";

export async function generateMetadata({ params }) {
  const { type } = await params;
  let typeTitle = "";
  switch (type) {
    case "info":
      typeTitle = "정보 공유";
      break;
    case "free":
      typeTitle = "자유";
      break;
    case "qna":
      typeTitle = "질문";
      break;
    default:
      typeTitle = "";
  }
  return {
    title: `${typeTitle} 게시물 목록`,
    description: `${typeTitle} 게시판`,
  };
}

async function fetchPostList(type, page = 1) {
  const params = new URLSearchParams({ type, page, limit: 30 });
  const response = await fetch(`${BASE_URL}/posts?${params.toString()}`, {
    headers: HEADERS,
  });
  return await response.json();
}

export default async function Page({ params }) {
  const { type, page } = await params;

  const data = await fetchPostList(type, page);
  // console.log(data);

  const postList = data.item.map((item) => {
    return <ListItem key={item._id} item={item} />;
  });

  return (
    <>
      <main className="min-w-80 p-10">
        <div className="text-center py-4">
          <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">
            정보 공유
          </h2>
        </div>
        <div className="flex justify-end mr-4">
          <form action="#">
            <input
              className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
              type="text"
              name="keyword"
            />
            <button
              type="submit"
              className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
            >
              검색
            </button>
          </form>

          <Link
            href={`/${type}/new`}
            className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded"
          >
            글작성
          </Link>
        </div>
        <section className="pt-10">
          <table className="border-collapse w-full table-fixed">
            <colgroup>
              <col className="w-[10%] sm:w-[10%]" />
              <col className="w-[60%] sm:w-[30%]" />
              <col className="w-[30%] sm:w-[15%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[10%]" />
              <col className="w-0 sm:w-[25%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-solid border-gray-600">
                <th className="p-2 whitespace-nowrap font-semibold">번호</th>
                <th className="p-2 whitespace-nowrap font-semibold">제목</th>
                <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  조회수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  댓글수
                </th>
                <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">
                  작성일
                </th>
              </tr>
            </thead>
            {/* post-list */}
            <tbody>{postList}</tbody>
          </table>
          <hr />

          <div>
            <Pagination
              currentPage={data.pagination.page}
              totalPage={data.pagination.totalPages}
            />
          </div>
        </section>
      </main>
    </>
  );
}
