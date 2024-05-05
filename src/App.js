import './App.css';
import ImageBanner from "./components/ImageBanner.jsx";

function App() {

  const banner =
    {
      title: "VORES KONCEPTER",
      text: "I koncernens søde univers af ideer, slikkepinde af koncepter danser i virksomhedens sfære. Fra smagen af innovation til strategisk sødme.",
      img_path: "https://anderssonsupply.dk/wp-content/uploads/2023/01/1979-scaled.jpg",
      imgAlt: "Candy"
    };

  return (
    <div className="App">
      <div className="container h-screen flex flex-col items-center justify-center mx-auto">
        <ImageBanner dict={banner}  />
      </div>
    </div>
  );
}

export default App;
