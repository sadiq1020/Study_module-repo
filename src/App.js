import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qa from './components/Qa/Qa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Qa></Qa>
    </div>
  );
}

export default App;
