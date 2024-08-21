import Clicker from "@/components/Clicker";

export default function HomePage() {
  return (
    <div>
      <h1>Client Components (Clicker)</h1>
      <p>This p tag is rendered on the server</p>
      <Clicker />
      <p>This is also on the server</p>
    </div>
  );
}
