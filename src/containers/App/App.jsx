import { Routes, Route,  BrowserRouter } from 'react-router-dom';
import cn from 'classnames'
import PeoplePage from '@components/PeoplePage';
import Home from '@components/HomePage/Home';
import Header from '@components/Header/Header';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PersonPage from '@components/PeoplePage/PersonPage/PersonPage';
import FavoritePage from '@components/FavoritePage/FavoritePage';
import s from './App.module.scss';
import SearchPage from '@components/SearchPage/SearchPage';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';


const Hello = 'hello';

const BASE_NAME = 'Star-wars-react';




function App() {
  return (
    <div className='container'>
      <BrowserRouter >
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/:id" element={<PersonPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/favorite/" element={<FavoritePage />} />
          <Route path="/fail" element={<ErrorMessage />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
