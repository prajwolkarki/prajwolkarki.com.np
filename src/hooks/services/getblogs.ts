import { client } from "@/sanity/lib/client";

export default async function getBlogs() {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    body,
    mainImage {
      asset->{
        _id,
        url
      },
    },
    publishedAt,
    "authorName": author->name,
    "categories": categories[]->title
  }`;
  
  return client.fetch(query);
}
