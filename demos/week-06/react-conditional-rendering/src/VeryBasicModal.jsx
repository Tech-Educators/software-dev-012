import { useState } from "react";

export default function BasicModal() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button onClick={handleModal}>Show/Hide</button>
      {showModal && <p>I am sometimes showing</p>}
    </>
  );
}
