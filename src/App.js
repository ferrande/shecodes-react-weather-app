import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from "./components/Footer";
import Forecast from "./components/Forecast";

function App() {
  return (
    <div className="App">
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;