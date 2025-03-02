import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserDetail from './components/UserDetail';
import Profile from './components/Profile';

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
        
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
        <Profile/>
      </div>
    </Router>
  );
}

export default App;
