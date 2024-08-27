// import { db } from "@/lib/db";
import pg from "pg";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function AddCandlePage() {
  async function handleAddCandle(formData) {
    "use server";
    const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });
    console.log("form action done");

    const scent = formData.get("scent");
    const colour = formData.get("colour");
    const price = formData.get("price");

    await db.query(
      `INSERT INTO candles (scent, colour, price) VALUES ($1, $2, $3)`,
      [scent, colour, price]
    );

    // revalidate that page to ensure ALL the new candles are shown
    revalidatePath("/");
    // redirect tot he page that shows the list of candles
    redirect("/");
  }

  return (
    <div>
      <h2>Add Candle</h2>
      <form action={handleAddCandle}>
        <input name="scent" placeholder="Scent" />
        <input name="colour" placeholder="Colour" type="color" />
        <input name="price" placeholder="Price" type="number" />
        <button>Submit</button>
      </form>
    </div>
  );
}
