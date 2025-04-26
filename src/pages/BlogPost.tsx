import { useParams } from "react-router"

const BlogPost = () => {
    const { slug } = useParams();
  return (
    <div>{slug}</div>
  )
}

export default BlogPost