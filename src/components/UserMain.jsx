import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UserDetail from './UserDetail';


const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const UserMain = () => {
  return (
    <Router>
      <div>
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
    </div>
    </Router>
    
  );
};

export default UserMain;