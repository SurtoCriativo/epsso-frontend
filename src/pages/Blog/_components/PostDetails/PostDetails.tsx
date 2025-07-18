import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SpinnerLoader from "../../../../components/SpinnerLoader";

export default function PostDetails() {
  const { slug } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(
          `https://epsso.com.br/diretorio/wp-json/wp/v2/posts?slug=${slug}&_embed=true`
        );
        setPost(response.data[0]); // WordPress returns an array
      } catch (err) {
        console.error("Erro ao buscar post", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (loading) return <SpinnerLoader message="Carregando..." />;
  if (!post) return <p>Post não encontrado.</p>;

  return (
    <article className="prose">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
      <img
        src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
        alt={post.title.rendered}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </article>
  );
}
