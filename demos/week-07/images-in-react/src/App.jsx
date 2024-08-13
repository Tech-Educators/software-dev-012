import JohnCena from "./assets/empty-image.jpeg";
import WheatField from "./assets/wheatfield-with-crows.jpg";
import Chameleon from "../public/chameleon.webp";

export default function App() {
  return (
    <div>
      <h1>Images</h1>
      <h2>Images in public directory</h2>
      <h3>Writing the name of the images as if the path starts in public</h3>
      <img src="chameleon.webp" alt="Blue Chameleon" />
      <img src="img/pillars-of-creation.webp" alt="Big space hand" />

      <h3>First importing the image</h3>
      <img src={Chameleon} alt="Blue Chameleon" />

      <h2>Images in the src/assets directory</h2>

      <h3>Importing our images then using them</h3>
      <img src={JohnCena} alt="John Cena from the Barbie movie" />
      <img src={WheatField} alt="Wheatfield with Crows - Van Grhough" />

      <h3>
        With a direct path to the assets directory (note that this one does work
        the way we expect)
      </h3>
      <img src="./assets/empty-image.jpeg" alt="john" />
    </div>
  );
}
