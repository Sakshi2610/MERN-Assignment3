import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './layout/Header';
import Home from './layout/Home';
import axios from 'axios';

export const ApplicationContext = createContext();

const usersUrl = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get(usersUrl);
      setUsers(res.data);
    } catch(error) {
      setError(error.message);
      console.log("error", error.message)
    }
  };

  useEffect(() => {
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
