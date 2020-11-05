import React from 'react';
import { useSelector } from 'react-redux';
import Chat from './components/Chat';
import Login from './components/Login';
import './App.css';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.username);
  return (
    <main>
      {!user ? <Login /> : <Chat />}
    </main>
  );
};

export default App;
