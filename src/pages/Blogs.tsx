// pages/Blogs.jsx
import { useNavigate } from 'react-router';
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard from "@/components/BlogCard";

const Blogs = () => {
  const { data: posts, isPending, error, isError } = useGetBlogs();
  console.log(posts)
  const navigate = useNavigate();
  
  const handleCardClick = (slug:any) => {
    navigate(`/blogs/${slug}`);
  };
  
  if (isPending) return <div className="flex justify-center p-8">Loading...</div>;
  if (isError) return <div className="p-8 text-red-500">Error: {error.message}</div>;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 font-tagesschrift underline">Blogs</h1>
      <div className="flex flex-col gap-4">
        {posts?.map((post:any) => (
          <BlogCard
            key={post._id}
            title={post.title}
            slug={post.slug?.current || post._id}
            publishedAt={post.publishedAt}
            authorName={post.authorName}
            imageUrl={post.mainImage?.asset?.url}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;