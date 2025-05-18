import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User2 } from "lucide-react";
import React from "react";

interface BlogCardProps {
  title: string;
  slug: string;
  publishedAt: string;
  authorName?: string;
  imageUrl?: string;
  onClick?: (slug: string) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  slug,
  publishedAt,
  authorName,
  imageUrl,
  onClick,
}) => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
      day: "2-digit",
    });
  };

  return (
    <Card
      className="overflow-hidden  border-none outline-none shadow-none hover:shadow-sm cursor-pointer h-34"
      onClick={() => onClick?.(slug)}
    >
      <div className="flex items-center gap-5 pl-4  h-full">
        {imageUrl && (
          <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
        )}
        <div className="flex-grow">
          <CardHeader className="p-0 pb-2">
            <CardTitle className="text-lg font-bold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-500 to-pink-600 transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardFooter className="p-0 flex md:flex-col md:items-start sm:items-center gap-3 sm:gap-4 text-xs dark:text-white">
            <div>{formatDate(publishedAt)}</div>
            <div className="flex items-center gap-1 dark:text-white">
              <User2 size={16} />
              {authorName}
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BlogCard;
