import { NoUser } from "@/components/NoUser";
import { db } from "@/lib/db";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const result = await db.query(`SELECT
    posts.id,
    posts.content,
    profiles.username
  FROM posts
  LEFT JOIN profiles ON posts.clerk_id = profiles.clerk_id`);

  const posts = result.rows;

  async function handleAddPost(formData) {
    "use server";
    // get the info from the form
    const post_content = formData.get("post_content");

    // get the profile id of the currently signed in user
    const user = await currentUser();

    // add the post to the database
    await db.query(`INSERT INTO posts (clerk_id, content) VALUES ($1, $2)`, [
      user.id,
      post_content,
    ]);
  }

  return (
    <div>
      <h2>Home</h2>
      <SignedIn>
        <form action={handleAddPost}>
          <textarea name="post_content" placeholder="Your Post..."></textarea>
          <button>Add Post</button>
        </form>
      </SignedIn>
      <SignedOut>
        <NoUser />
      </SignedOut>
      {posts.map(function (post) {
        return (
          <div key={post.id}>
            <h3>{post.username ? post.username : "Annonymous"}</h3>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}

/*
SQL to create posts table


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  clerk_id TEXT,
  content TEXT
);
 */
