import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

export default async function getSingleBlog(slug: any) {
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

  const post = await client.fetch(query, { slug });

  if (post.mainImage) {
    post.mainImageUrl = urlFor(post.mainImage).url();
  }

  if (post.authorImage) {
    post.authorImageUrl = urlFor(post.authorImage).url();
  }

  return post;
}
