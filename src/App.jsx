import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LastCoffeeRecords from './pages/lastCoffeeRecords';
import NotificationPage from './pages/settings/NotificationPage';
import CoffeeLogPage from './pages/coffeeLogs';
import LogCompletePage from './pages/coffeeLogs/LogCompletePage';
import MyPage from './pages/settings/MyPage';
import LastCoffeeReports from './pages/lastCoffeeRecords/LastCoffeeReport';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings/NotificationPage" element={<NotificationPage />} />
        <Route path="/settings/MyPage" element={<MyPage />} />
        <Route path="/coffee-log" element={<CoffeeLogPage />} />
        <Route path="/log-complete" element={<LogCompletePage />} />
        <Route path="/lastCoffeeRecords" element={<LastCoffeeRecords />} />
        <Route path="/lastCoffeeReports" element={<LastCoffeeReports />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
