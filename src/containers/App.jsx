import cn from 'classnames'
import { getApiResource } from '../utils/network';
import s from './App.module.css';


function App() {
  return (
    <div>
      <h1 className='header'>Hello</h1>
      <h2 className={cn(s.header , s.text)}>erzhna</h2>
    </div>
  );
}

export default App;
