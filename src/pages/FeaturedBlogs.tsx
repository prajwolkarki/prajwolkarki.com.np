import { useNavigate } from 'react-router';
import useGetBlogs from "@/hooks/useGetBlogs";
import { ChevronRight, ExternalLink } from 'lucide-react';

const FeaturedBlogs = () => {
  const { data: posts, isPending, error } = useGetBlogs();
  const navigate = useNavigate();

  const handleCardClick = (slug:any) => {
    navigate(`/blogs/${slug}`);
  };

  const featuredPosts = posts?.slice(0, 3) || [];

  if (isPending) return <div className="animate-pulse">Loading featured blogs...</div>;
  if (error) return null; 

  const getGradientBorder = (index:number) => {
    const gradients = [
      "from-purple-200 to-purple-100", 
      "from-green-200 to-teal-100",    
      "from-yellow-200 to-pink-100"    
    ];
    return gradients[index % gradients.length];
  };

  const formatDate = (dateString:any) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 font-tagesschrift">Featured Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPosts.map((post:any, index:number) => (
            <div 
              key={post._id}
              onClick={() => handleCardClick(post.slug?.current || post._id)}
              className={`cursor-pointer bg-white rounded-lg overflow-hidden border-2 bg-gradient-to-br ${getGradientBorder(index)} p-0.5 h-full`}
            >
              <div className="bg-white p-6 rounded-md h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-8">
                  {formatDate(post.publishedAt)}
                </p>
                <ExternalLink size={20} className='ml-auto'/>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex justify-start">
          <button 
            onClick={() => navigate('/blogs')}
            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md flex items-center"
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