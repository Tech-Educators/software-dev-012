"use client";

import { useRef } from "react";
import { formAction } from "../lib/actions";

export default function FormThatResets() {
  // Defining the variable we will use:
  const commentFormRef = useRef(null);

  return (
    <>
      <form
        //   Giving our form the reference
        ref={commentFormRef}
        action={(formData) => {
          formAction(formData);
          //   The function which resets our form:
          commentFormRef.current.reset();
        }}
      >
        <input type="text" name="message" placeholder="message" />
        <button>Submit</button>
      </form>
    </>
  );
}
