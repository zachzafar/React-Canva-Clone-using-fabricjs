import React from 'react';
import '../css/App.css';
import Login from './Login';
import MainPage from './MainPage';
import { useStateValue } from '../func/StateProvider';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className='text-center h-screen'>
      {!user ? <Login /> : <MainPage />}
    </div>
  );
}
export default App;
