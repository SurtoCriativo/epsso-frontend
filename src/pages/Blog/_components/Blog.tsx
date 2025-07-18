import { useState } from "react";
import { usePosts } from "../../../hooks/usePost";
import SpinnerLoader from "../../../components/SpinnerLoader";

export default function Blog() {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isError, isFetching } = usePosts(page);

  function stripHtml(html: string) {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  }

  if (isLoading) return <SpinnerLoader message="Carregando..." />;
  if (isError) return <p>Error loading posts.</p>;

  return (
    <div>
      <ul>
        {posts!.map((post) => (
          <li className="flex-row p-2" key={post.id}>
            <a
              className="text-2xl font-bold mb-2"
              href={post.link}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <p>{stripHtml(post.content.rendered)}</p>
          </li>
        ))}
      </ul>

      <div className="pagination">
        <button
          className="bg-green-soft-300 text-green-accents-600 rounded-full shadow mx-auto md:mx-0 flex items-center gap-2 w-[134px] h-[28px] px-3 text-[10px]"
          style={{ fontWeight: 500, margin: 0 }}
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <span>
          Page {page}
          {isFetching ? "…" : ""}
        </span>

        <button
          className="bg-green-soft-300 text-green-accents-600 rounded-full shadow mx-auto md:mx-0 flex items-center gap-2 w-[134px] h-[28px] px-3 text-[10px]"
          style={{ fontWeight: 500, margin: 0 }}
          onClick={() => setPage((old) => old + 1)}
          disabled={posts!.length < 6}
        >
          Next
        </button>
      </div>
    </div>
  );
}
