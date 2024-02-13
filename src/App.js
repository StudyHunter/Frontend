import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import InnerRoom from './pages/InnerRoom';
import GlobalStyles from './GlobalStyles';
import MakeRoom from './pages/MakeRoom';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />}></Route>
          <Route path="/InnerRoom" element={<InnerRoom />} />
          <Route path="/pages/MakeRoom" element={<MakeRoom/>} />
          {/* <Route path="/pages/MakeRoom" element={<UserMakeRoom/>} />
        <Route path="/qpinfo" element={<QpInfo />}/>
        <Route path="/myPage" element={<MyPage/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
