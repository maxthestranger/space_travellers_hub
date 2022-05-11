import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/global.scss';
import Rockets from './pages/rockets';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Rockets />} />
    </Routes>
  </BrowserRouter>
);

export default App;
