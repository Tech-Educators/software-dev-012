import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function ProfilePage() {
  const user = await currentUser();

  async function handleAddProfile(formData) {
    "use server";
    const bio = formData.get("bio");
    const username = formData.get("username");

    await db.query(
      `INSERT INTO profiles (clerk_id, username, bio) VALUES ($1, $2, $3)`,
      [user?.id, username, bio]
    );

    revalidatePath("/profile");
  }

  // if the user ISN'T signed in with clerk, don't carry on, just tell them to sign in
  if (!user) {
    return <p>Please sign in</p>;
  }

  // check the database to see if there is a profile with this clerk_id
  const response = await db.query(
    `SELECT * FROM profiles WHERE clerk_id = $1`,
    [user.id]
  );

  // if we don't have a profile, give the form to add one
  if (response.rowCount === 0) {
    return (
      <div>
        <h2>Please Create your profile</h2>
        <form action={handleAddProfile}>
          <input name="username" placeholder="Username" />
          <input name="bio" placeholder="Bio" />
          <button>Create Profile</button>
        </form>
      </div>
    );
  }

  // if we DO have a profile, show the details
  const profile = response.rows[0];

  return (
    <div>
      <h2>{profile.username}</h2>
      <p>{profile.bio}</p>
    </div>
  );
}
