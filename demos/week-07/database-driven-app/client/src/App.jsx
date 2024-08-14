import { useEffect, useState } from "react";

export default function App() {
  const [candles, setCandles] = useState([]);
  const [form, setForm] = useState({
    scent: "",
    colour: "",
    price: 0,
  });

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

  function handleChange(event) {
    console.log("Type in an input happened");
    const name = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Form is submitted");
    console.log(form);
    // make a POST fetch request to our server
    await fetch("http://localhost:8080/candles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    setForm({
      scent: "",
      colour: "",
      price: 0,
    });
    getCandles();
  }

  return (
    <div>
      <h1>Candles are LIFE (live laugh love)</h1>
      <p>Here are my lovely candles:</p>

      <h2>Add new Candle</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="scent"
          placeholder="Scent"
          onChange={handleChange}
          value={form.scent}
        />
        <input
          name="colour"
          placeholder="Colour"
          onChange={handleChange}
          value={form.colour}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          onChange={handleChange}
          value={form.price}
        />
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
