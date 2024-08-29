type slugParams = {
  params: { slug: string };
};

export default function SlugPage({ params }: slugParams) {
  console.log(params);
  return (
    <div>
      <h2>Slug Page</h2>
      <p>
        This page is dynamic, and will show whatever the user puts in the url,
        because we can use params
      </p>
      <p>Thing that is in the url: {params.slug}</p>
    </div>
  );
}
