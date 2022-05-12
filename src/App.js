import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/global.scss';
import Rockets from './pages/rockets';
import Menubar from './components/Menu';

const App = () => (
  <BrowserRouter>
    <Menubar />
    <Routes>
      <Route path="/" element={<Rockets />} />
    </Routes>
  </BrowserRouter>
);

export default App;
