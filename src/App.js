import { BrowserRouter } from 'react-router-dom';
import Routes from './route';
import Layout from './components/Layout';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
