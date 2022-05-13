import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/css/global.scss';
import Rockets from './pages/rockets';
import Mission from './pages/missions';
import Profile from './pages/profile';
import Menubar from './components/Menu';

const App = () => (
  <BrowserRouter>
    <Menubar />
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>
);

export default App;
