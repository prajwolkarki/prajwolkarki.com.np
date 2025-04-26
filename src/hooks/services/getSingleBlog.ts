import { client } from "@/sanity/lib/client";

export default async function getSingleBlog(slug:any) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        body,
        publishedAt,
        "authorName": author->name,
        "authorImage": author->image,
        "categories": categories[]->title
      }`;

  return client.fetch(query, { slug });
}
