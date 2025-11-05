import { client } from "@/lib/sanity";
import Link from "next/link";

interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

async function getPosts() {
  const posts = await client.fetch<Post[]>(`*[_type == "post" && defined(slug.current)]{
    _id,
    title,
    slug
  }`);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1 className="text-4xl font-bold underline">Sanity Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/post/${post.slug.current}`}>
                <h2>{post.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </main>
  );
}
