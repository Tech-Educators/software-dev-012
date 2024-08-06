import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import "./css/Header.css";
import "./css/Gallery.css";
import "./css/Footer.css";

export default function App() {
  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}
