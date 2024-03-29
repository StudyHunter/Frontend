import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import Main from './pages/Main';
import InnerRoom from './pages/InnerRoom';
import GlobalStyles from './GlobalStyles';
import MakeRoom from './pages/MakeRoom';
import MyPage from './pages/MyPage';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {
  const PrivateRoute = () => {
    const isUnauthorized = false;
    if (isUnauthorized) {
      return <Navigate to="/" replace />;
    }
    return <Outlet />;
  };
  const theme = {
    basic: '#ff7a00',
    basicHover: '#ffb46e',
    basicGray: '#676767',
    whiteGray: '#dadada',
    whiteLogo: '/img/whiteLogo.svg',
    basicLogo: '/img/basicLogo.svg',
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route elment={<PrivateRoute />}>
              <Route path="/Main" element={<Main />} />
              <Route path="/InnerRoom" element={<InnerRoom />} />
              <Route path="/MakeRoom" element={<MakeRoom />} />
              <Route path="/myPage" element={<MyPage />} />
            </Route>
            <Route path="/" index element={<Login />}></Route>
            <Route path="/SignIn" index element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
