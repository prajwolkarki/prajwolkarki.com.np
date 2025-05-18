import { useNavigate } from 'react-router';
import useGetBlogs from "@/hooks/useGetBlogs";
import { ChevronRight, ExternalLink } from 'lucide-react';

const FeaturedBlogs = () => {
  const { data: posts, isPending, error } = useGetBlogs();
  const navigate = useNavigate();

  const handleCardClick = (slug: any) => {
    navigate(`/blogs/${slug}`);
  };

  const featuredPosts = posts?.slice(0, 3) || [];

  if (isPending)
    return (
      <div className="animate-pulse dark:text-gray-200">
        Loading featured blogs...
      </div>
    );
  if (error) return null;

  const getGradientBorder = (index: number) => {
    // Add dark mode gradients as well
    const gradients = [
      {
        light: "from-purple-200 to-purple-100",
        dark: "from-purple-900 to-purple-800"
      },
      {
        light: "from-green-200 to-teal-100",
        dark: "from-green-900 to-teal-900"
      },
      {
        light: "from-yellow-200 to-pink-100",
        dark: "from-yellow-900 to-pink-900"
      }
    ];
    const g = gradients[index % gradients.length];
    return `bg-gradient-to-br ${g.light} dark:${g.dark}`;
  };

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', month: 'long', day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-tagesschrift dark:text-white">
          Featured Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post: any, index: number) => (
            <div
              key={post._id}
              onClick={() => handleCardClick(post.slug?.current || post._id)}
              className={`cursor-pointer rounded-lg overflow-hidden border-2 p-0.5 h-full ${getGradientBorder(index)} bg-white dark:bg-slate-900 border-transparent dark:border-slate-800 transition-colors`}
            >
              <div className="bg-white dark:bg-slate-900 p-6 rounded-md h-full flex flex-col transition-colors">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8">
                  {formatDate(post.publishedAt)}
                </p>
                <ExternalLink size={20} className="ml-auto text-gray-700 dark:text-gray-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-start">
          <button
            onClick={() => navigate('/blogs')}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md flex items-center dark:bg-green-700 dark:hover:bg-green-800 transition-colors"
          >
            See All
            <ChevronRight className="ml-2" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;