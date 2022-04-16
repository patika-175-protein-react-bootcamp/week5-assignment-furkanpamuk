import './App.css';
import RegisterPage from './pages/RegisterPage';
import { DataProvider } from './context/Data'

function App() {
  return (
    <DataProvider>
      <RegisterPage />
    </DataProvider>
  );
}

export default App;
