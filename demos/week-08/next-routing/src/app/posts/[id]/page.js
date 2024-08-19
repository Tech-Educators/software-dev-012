export default function SinglePostPage({ params }) {
  console.log(params);
  // here we would do a fetch to go and get our post with an id of 999
  return (
    <div>
      <h2>Single post page with an id of: {params.id}</h2>
      <p>Woah this cool!</p>
      <p>
        Because we put this page.js inside a dynamic route segment using [id],
        we get params with a propery called id
      </p>
    </div>
  );
}
