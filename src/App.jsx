import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NonFoundPage from './pages/NonFoundPage';
import LandingPage from './pages/LandingPage';
import UserEditPage from './pages/UserEditPage';
import CommonLayout from './components/layout/CommonLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 공통 레이아웃 */}
        <Route path="/" element={<CommonLayout />}>
          <Route path="user-edit" element={<UserEditPage />} />
        </Route>
        {/* 404 에러 */}
        <Route path="*" element={<NonFoundPage />} />
        {/* 단독 레이아웃 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
