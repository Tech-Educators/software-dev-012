export default function Footer() {
  const inlneStylesVariable = {
    backgroundColor: "fuchsia",
    fontFamily: "cursive",
  };
  return (
    <footer>
      <p>Copyright Me 2k24</p>
      <a href="#">
        I am a link in the footer, i sure hope I am blue and underlined!
      </a>
      <h2>DO NOT USE INLINE STYLES UNLESS YOU HAVE TO (CSS in JS)</h2>
      <p style={{ backgroundColor: "orange", fontFamily: "fantasy" }}>
        I have inline styling
      </p>
      <p style={inlneStylesVariable}>
        I have inline styles too, but my style object is written above for
        cLaRItY
      </p>
    </footer>
  );
}
