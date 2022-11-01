import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstPart from './pages/FirstPart';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<FirstPart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
