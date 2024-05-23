import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import ReactModal from 'react-modal';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NonFoundPage from './pages/NonFoundPage';
import LandingPage from './pages/LandingPage';
import UserEditPage from './pages/UserEditPage';
import CommonLayout from './components/layout/CommonLayout';
import Main from './pages/Main';
import ClassPage from './pages/ClassPage';

// 애플리케이션의 루트 요소를 설정합니다.
ReactModal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* 공통 레이아웃 */}
        <Route path="/" element={<CommonLayout />}>
          <Route path="user-edit" element={<UserEditPage />} />
          <Route path="main" element={<Main />} />
          <Route path="group/:id" element={<ClassPage />} />
        </Route>
        {/* 404 에러 */}
        <Route path="*" element={<NonFoundPage />} />
        {/* 단독 레이아웃 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
