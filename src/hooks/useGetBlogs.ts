import { useQuery } from "@tanstack/react-query";
import getBlogs from "./services/getblogs";

export default function useGetBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
    staleTime:5*60*1000, 
  });
}
