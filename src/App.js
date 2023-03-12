import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/Mainpage/MainPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/about/:id' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;