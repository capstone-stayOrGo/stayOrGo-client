import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Stay or Go</h1>
      <div id="map"></div>
      <Map />
      <Footer />
    </div>
  );
}

export default App;
