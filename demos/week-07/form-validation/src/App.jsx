import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState("");

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let tempError = "";
    // the username must be at least 3 characters long
    if (form.username.length < 3) {
      tempError += "Username must be more than 2 characters. ";
    }

    // the password must be longer than 8 characters
    if (form.password.length < 9) {
      tempError += "Password is too short.";
    }

    if (tempError !== "") {
      setFormError(tempError);
    } else {
      setFormError("");
      console.log("Form has been submitted");
    }
  }

  return (
    <div>
      <h1>Form Validation</h1>
      <form onSubmit={handleSubmit}>
        {formError !== "" && <p className="error">{formError}</p>}
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <button>Create User</button>
      </form>
    </div>
  );
}
