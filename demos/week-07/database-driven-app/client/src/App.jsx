import { useEffect, useState } from "react";

export default function App() {
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    getCandles();
  }, []);

  async function getCandles() {
    // call the api
    const response = await fetch("http://localhost:8080/candles");
    // get the data from the response
    const data = await response.json();
    // update our state with that new data
    setCandles(data);
  }

  return (
    <div>
      <h1>Candles are LIFE (live laugh love)</h1>
      <p>Here are my lovely candles:</p>

      <h2>Add new Candle</h2>
      <form>
        <input name="scent" placeholder="Scent" />
        <input name="colour" placeholder="Colour" />
        <input name="price" placeholder="Price" type="number" />
        <button>Submit</button>
      </form>

      <h2>Candles</h2>
      {candles.map(function (candle) {
        return (
          <h3 key={candle.scent} style={{ color: candle.colour }}>
            {candle.scent} - £{candle.price}
          </h3>
        );
      })}
    </div>
  );
}
