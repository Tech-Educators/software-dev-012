export default function AboutLayout({ children }) {
  return (
    <div>
      <p>This will show on any page within the /about directory</p>
      {children}
    </div>
  );
}
