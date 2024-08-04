import { Footer, Header } from './components';
import { AppRoutes } from './routes';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
