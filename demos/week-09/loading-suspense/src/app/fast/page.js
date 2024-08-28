import { Suspense } from "react";
import SlowComponent from "@/components/SlowComponent";
import FlashingThing from "@/components/FlashingThing";

export default function FastPage() {
  return (
    <div>
      <h2>Fast</h2>
      <p>This page is going to load right away EXCEPT for the SlowComponent</p>
      <p>This is because SlowComponent is in suspense</p>
      <Suspense fallback={<FlashingThing />}>
        <SlowComponent />
      </Suspense>
      <p>I am below the SlowComponent</p>
    </div>
  );
}
