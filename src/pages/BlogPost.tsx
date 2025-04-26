import { PortableText, PortableTextComponents } from "@portabletext/react";
import { useParams } from "react-router";
import Loading from "@/components/Loading";
import { Badge } from "@/components/ui/badge";
import useGetBlogBySlug from "@/hooks/useGetBlogBySlug";

const BlogPost = () => {
  const { slug } = useParams();
  const { data: post, isLoading, isError, error } = useGetBlogBySlug(slug);

  if (isLoading) return <Loading />;

  if (isError) {
    return (
      <div className="p-4 text-red-500">
        Something went wrong!{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  if (!post) return <div className="p-4">No post found!</div>;

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold my-6">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-semibold my-4">{children}</h2>
      ),
      normal: ({ children }) => (
        <p className="text-lg leading-8 my-4 text-gray-700 dark:text-gray-300">
          {children}
        </p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside space-y-2 pl-4">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal list-inside space-y-2 pl-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          {children}
        </li>
      ),
      number: ({ children }) => (
        <li className="text-lg leading-8 text-gray-700 dark:text-gray-300">
          {children}
        </li>
      ),
    },
    types: {
      image: ({ value }) => (
        <img
          src={value.asset.url}
          alt={value.alt || "Post image"}
          className="my-6 rounded-lg"
        />
      ),
    },
    
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <img
            src={post.authorImageUrl}
            alt={post.authorName}
            className="w-12 h-12 rounded-full border-2 border-gray-200 dark:border-black dark:invert"
          />
          <div className="flex flex-col">
            <span className="font-medium text-gray-900 dark:text-gray-100">
              {post.authorName}
            </span>
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                dateStyle: "long",
              })}
            </time>
          </div>
        </div>
        
        <h1 className="text-5xl font-bold font-tagesschrift mb-6 text-gray-900 dark:text-gray-100">
          {post.title}
        </h1>

        {post.mainImageUrl && (
          <figure className="my-8 w-full h-70">
            <img
              src={post.mainImageUrl}
              alt={post.title}
              className="w-full h-full rounded-xl shadow-sm object-contain"
            />
          </figure>
        )}

        <div className="flex gap-2 mb-8">
          {post.categories?.map((category:any) => (
            <Badge
              key={category}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
            >
              {category}
            </Badge>
          ))}
        </div>
      </header>

      <section className="prose prose-lg dark:prose-invert max-w-none">
        <PortableText value={post.body} components={components} />
      </section>
    </article>
  );
};

export default BlogPost;