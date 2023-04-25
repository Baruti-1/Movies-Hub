import AppRoutes from "./routes/AppRoutes";
import { Header, Footer } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
