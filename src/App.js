import "bootstrap/dist/css/bootstrap.css";
import "./styles/styles.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

import WeatherApp from "./pages/WeatherApp";

function App() {
  return (
    <div className="App">
      <WeatherApp />
    </div>
  );
}

export default App;