import { useQuery } from "@tanstack/react-query"
import getSingleBlog from "./services/getSingleBlog"

const useGetBlogBySlug = (slug:any) => {
    return useQuery({
        queryKey: ["blog",slug],
        queryFn: () => getSingleBlog(slug),
        enabled:!!slug,
        staleTime: 5 * 60 * 1000, 
    })
}

export default useGetBlogBySlug