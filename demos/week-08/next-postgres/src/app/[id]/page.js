import { db } from "@/lib/db";

export default async function SingleCandlePage({ params }) {
  // ooh fancy error handling such wow
  if (isNaN(params.id)) {
    return <p>No such post, go back from whence ye came!</p>;
  }

  const result = await db.query(
    `SELECT * FROM candles WHERE id = ${params.id}`
  );
  console.log(result);
  const candle = result.rows[0];

  return (
    <div style={{ backgroundColor: candle.colour }}>
      <h2>{candle.scent}</h2>
      <p>Price: {candle.price}</p>
    </div>
  );
}
