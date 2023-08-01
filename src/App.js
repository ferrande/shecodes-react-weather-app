import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import Footer from "./Footer";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="App">
      <Forecast />
      <Footer />
    </div>
  );
}
