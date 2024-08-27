import { db } from "@/lib/db";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function Home() {
  const user = await currentUser();
  console.log(user);

  const result = await db.query(`SELECT * FROM candles`);
  const candles = result.rows;

  async function handleAddCandle(formData) {
    "use server";
    const scent = formData.get("scent");
    const colour = formData.get("colour");
    const price = formData.get("price");

    await db.query(
      `INSERT INTO candles (scent, colour, price, user_id) VALUES ($1, $2, $3, $4)`,
      [scent, colour, price, user?.id]
    );

    revalidatePath("/");
  }

  return (
    <div>
      <h2>Home</h2>
      <SignedIn>
        <form action={handleAddCandle}>
          <input name="scent" placeholder="Scent" />
          <input name="colour" placeholder="Colour" type="color" />
          <input name="price" placeholder="Price" type="number" />
          <button>Submit</button>
        </form>
      </SignedIn>

      <SignedOut>
        <p>
          You must <SignInButton /> to add candles
        </p>
      </SignedOut>

      {candles.map(function (candle) {
        return (
          <p key={candle.scent} style={{ color: candle.colour }}>
            {candle.scent} - £{candle.price}
          </p>
        );
      })}
    </div>
  );
}
