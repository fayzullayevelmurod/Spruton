import { Footer, Header } from "./components";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
