import { useState } from "react";

export default function VeryBasicModal() {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <button onClick={handleModal}>Show/hide</button>
      {showModal && <p>I am sometimes hidden.</p>}
    </>
  );
}
