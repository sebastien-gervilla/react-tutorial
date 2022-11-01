import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPart from './pages/FirstPart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
