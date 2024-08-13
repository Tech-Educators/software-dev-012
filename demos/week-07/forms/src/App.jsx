import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ username: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    // this will set state to be back to how is tarted, meaning hte input will go back to being empty
    setForm({ username: "", password: "" });
  }

  function handleChange(event) {
    const name = event.target.name; // username or password
    const value = event.target.value; // what we have typed in the input

    // set form to be a new object that takes ALL the properties of form as it is now (using ...)
    // then update ONE of the properties to be the value of what we have typed in the input
    // [name] lets us take the value of "name" and use it as our field name
    setForm({ ...form, [name]: value });
  }

  return (
    <div>
      <h1>Forms</h1>
      <p>Username: {form.username}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange} // whenever we type this function runs
          value={form.username} // this fields value is linked to the username state value
        />
        <p>
          Becuase of our onChange and value attributes on the input: When you
          change state, the input gets updated. When you change whats in the
          input, state gets updated
        </p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}
