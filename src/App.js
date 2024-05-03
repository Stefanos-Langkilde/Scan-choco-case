import './App.css';
import ImageBanner from "./components/ImageBanner.jsx";

function App() {

  const title = "Welcome to our page!";
  const txt = "We are happy to have you here.";
  const imgPath = "https://images.unsplash.com/photo-1626753464298-1a0f3f7e9b4d";
  const imgAlt = "A beautiful landscape";

  return (
    <div className="App">
      <div className="container mx-auto">
        <ImageBanner headerText={title} text={txt} image_path={imgPath} placeHolderText={imgAlt} />
      </div>
    </div>
  );
}

export default App;
