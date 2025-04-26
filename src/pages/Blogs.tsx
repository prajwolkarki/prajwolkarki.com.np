// pages/Blogs.jsx
import { useNavigate } from 'react-router';
import useGetBlogs from "@/hooks/useGetBlogs";
import BlogCard from "@/components/BlogCard";
import Loading from '@/components/Loading';

const Blogs = () => {
  const { data: posts, isPending, error, isError } = useGetBlogs();
  console.log(posts)
  const navigate = useNavigate();
  
  const handleCardClick = (slug:any) => {
    navigate(`/blogs/${slug}`);
  };
  
  if (isPending) return <Loading />;
  if (isError) return <div className="p-8 text-red-500">Error: {error.message}</div>;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold font-tagesschrift underline">Blogs</h1>
      <p className='text-slate-400 mt-2 mb-3 select-none font-tagesschrift pl-5'>The place where I share my thoughts,ideas and experiences about software development.</p>
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