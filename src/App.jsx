import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LastCoffeeRecords from './pages/lastCoffeeRecords';
import NotificationPage from './pages/settings/NotificationPage';
import CoffeeLogPage from './pages/coffeeLogs';
import LogCompletePage from './pages/coffeeLogs/LogCompletePage';
import MyPage from './pages/settings/MyPage';
import LastCoffeeReports from './pages/lastCoffeeRecords/LastCoffeeReport';
import WindowSelector from './pages/etc/noncoffee';
import LoginPage from "./pages/login/login";
import LoginSetting from "./pages/login/loginsetting";
import InputIdpage from "./pages/signup/Idinput";
import CongraturationPage from "./pages/signup/congratulation";
import NameInputPage from "./pages/signup/nickname";
import Logo from './pages/splash/logo';
import FirstSplash from './pages/splash/firstsplash';
import SecondSplash from './pages/splash/secondsplash';
import LastSplash from './pages/splash/lastsplash';
import Password from './pages/signup/password';
import PasswordCheck from './pages/signup/pwcheck';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings/NotificationPage" element={<NotificationPage />} />
        <Route path="/settings/MyPage" element={<MyPage />} />
        <Route path="/coffee-log" element={<CoffeeLogPage />} />
        <Route path="/log-complete" element={<LogCompletePage />} />
        <Route path="/lastCoffeeRecords" element={<LastCoffeeRecords />} />
        <Route path="/lastCoffeeReports" element={<LastCoffeeReports />} />
        <Route path="/" element={<Logo />} />
        <Route path="first" element={<FirstSplash />} />
        <Route path="/second" element={<SecondSplash />} />
        <Route path="/last" element={<LastSplash />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/api/coffee/login" element={<LoginSetting />} />
        <Route path="/idinput" element={<InputIdpage />} />
        <Route path="/window" element={<WindowSelector/>} />
        <Route path="/password" element={<Password/>} />
        <Route path="/pwcheck" element={<PasswordCheck/>} />
        <Route path="/api/coffee/signup" element={<NameInputPage/>} />
        <Route path="/con" element={<CongraturationPage/>} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
