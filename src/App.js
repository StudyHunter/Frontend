import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import InnerRoom from './pages/InnerRoom';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/InnerRoom" element={<InnerRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
