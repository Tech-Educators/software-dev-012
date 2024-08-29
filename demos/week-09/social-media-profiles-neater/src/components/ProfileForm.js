import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function ProfileForm() {
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
