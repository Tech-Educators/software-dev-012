"use client";

// Import useRef from React:
import { useRef } from "react";

import { formAction } from "../lib/actions";

import FormThatResets from "./components/FormThatResets";

export default function Home() {
  // useRef gives us an object with a "current" property.
  // Like useState, what we put in the brackets is going to be the initial value of our variable,
  // so ref = { current: null }
  const formRef = useRef(null);

  // putting ref={formRef} on our form tag sets formRef to be the DOM node of our form,
  // meaning, when we update the inputs on the form, the DOM node updates
  // therefore, formRef is updating.

  // After we submit the form, we set formRef back to null
  // making the form empty again!

  return (
    <>
      <h1>Home Page Form that resets!</h1>
      {/* I don't need this form here now, because I've extracted it to a Client Component below */}
      <form
        ref={commentFormRef}
        action={(formData) => {
          formAction(formData);
          commentFormRef.current.reset();
        }}
      >
        <input type="text" name="message" placeholder="message" />
        <button>Submit</button>
      </form>

      <h2>Importing the form as a client component:</h2>
      <FormThatResets />
    </>
  );
}
