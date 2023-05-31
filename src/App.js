import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const API_USERS_URL = process.env.REACT_APP_API_ENDPOINT + '/users'

function App() {
  const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch(API_USERS_URL)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(console.error)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        {users.length > 0 && (
          <ul>
            <h2>Get from {API_USERS_URL}</h2>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
