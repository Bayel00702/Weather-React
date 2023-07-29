//styles
import './styles/style.scss'
import Header from "./Components/Header/Header";
import Weather from "./Components/weatherTop/weather";
import WeatherBottom from "./Components/WeatherBottom/WeatherBottom";

// components


function App() {
  return (
    <div className="App">
        <Header/>

        <main>
          <Weather/>
          <WeatherBottom/>
        </main>
    </div>
  );
}

export default App;
