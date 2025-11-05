import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  body: any; // Portable Text is a complex type
}

async function getPost(slug: string) {
  const post = await client.fetch<Post>(`*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    body
  }`, { slug });
  return post;
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main>
      <h1>{post.title}</h1>
      {post.body ? <PortableText value={post.body} /> : <p>No content</p>}
    </main>
  );
}
