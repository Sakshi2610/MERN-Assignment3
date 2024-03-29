import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Home from './layout/Home';

export const ApplicationContext = createContext();

const usersUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(usersUrl);
        const data = await response.json();
        setUsers(data);
      } catch(error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      <ApplicationContext.Provider value={{ users }}>
        <Header />
        <Home />
      </ApplicationContext.Provider>
    </>
  );
}

export default App;
