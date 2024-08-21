import { db } from "@/lib/db";

export default async function Home() {
  const result = await db.query(`SELECT * FROM candles`);
  const candles = result.rows;

  return (
    <div>
      <h2>Home</h2>
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
