//styles
import './styles/style.scss'
import Header from "./Components/Header/Header";
import Weather from "./Components/weatherTop/weather";

// components


function App() {
  return (
    <div className="App">
        <Header/>

        <main>
          <Weather/>
        </main>
    </div>
  );
}

export default App;
