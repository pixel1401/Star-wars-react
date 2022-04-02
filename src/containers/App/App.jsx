import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import cn from 'classnames'
import PeoplePage from '@components/PeoplePage';
import Home from '@components/HomePage/Home';
import Header from '@components/Header/Header';
import s from './App.module.scss';
import NotFoundPage from '../NotFoundPage/NotFoundPage';






function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="people" element={<PeoplePage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
