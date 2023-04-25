import Routes from "./routes/AppRoutes";
import { Header, Footer, Card } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
