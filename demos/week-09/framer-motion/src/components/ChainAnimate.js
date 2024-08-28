"use client";

import { useAnimate } from "framer-motion";

export function ChainAnimate({ children }) {
  const [scope, animate] = useAnimate();

  function sequence() {
    animate([
      // Initial rotation and move to the right
      [scope.current, { rotate: -180, x: "60%", opacity: 0.5 }],

      // Scale up, move up and to the right, and begin color change
      [
        scope.current,
        {
          scale: 5,
          y: "-50%",
          x: "70%",
          backgroundColor: "#FF5292",
          color: "#3F0F46",
          opacity: 1,
        },
      ],

      // Rotate back to 0, adding a skew effect
      [scope.current, { rotate: 0, skewX: "20deg", skewY: "20deg" }],

      // Scale down, move down, adjust skew, and continue color change
      [
        scope.current,
        {
          scale: 0.1,
          y: "80%",
          skewX: "-20deg",
          skewY: "-20deg",
          backgroundColor: "#3F0F46",
          color: "#37BCFF",
        },
      ],

      // Return to normal scale, move to the bottom of the container, reset skew, complete color change
      [
        scope.current,
        {
          scale: 1,
          y: "100%",
          skewX: "0deg",
          skewY: "0deg",
          backgroundColor: "#FFC540",
          color: "#ffffff",
          opacity: 1,
        },
      ],
    ]);
  }

  return (
    <div>
      <div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          cursor: "pointer",
        }}
        ref={scope}
        onClick={sequence}
      />
    </div>
  );
}
