import { client } from "@/lib/sanity";

interface Post {
  _id: string;
  title: string;
  // Add other fields you want to fetch from Sanity
}

async function getPosts() {
  const posts = await client.fetch<Post[]>(`*[_type == "post"]`);
  return posts;
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Sanity Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h2>{post.title}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found</p>
      )}
    </main>
  );
}
