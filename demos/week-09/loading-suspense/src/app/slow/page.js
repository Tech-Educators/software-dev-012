import SlowComponent from "@/components/SlowComponent";

export default function SlowPage() {
  return (
    <div>
      <h2>Slow</h2>
      <p>
        This page loads after 5 seconds, when the SlowComponent finished
        loading.
      </p>
      <SlowComponent />
    </div>
  );
}
