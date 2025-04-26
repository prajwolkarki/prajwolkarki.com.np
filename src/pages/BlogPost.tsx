import useGetBlogBySlug from "@/hooks/useGetBlogBySlug";
import { useParams } from "react-router";

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isPending, isError, error } = useGetBlogBySlug(slug);
  if (isPending) return <div>Loading.....</div>;
  if (isError) return <div>Error:{error.message}</div>;
  return <div>{slug}{JSON.stringify(post)}</div>;
};

export default BlogPost;
