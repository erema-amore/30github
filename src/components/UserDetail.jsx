import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id));

  return (
    <div>
      <h2>User Detail</h2>
      {user ? <p>Name: {user.name}</p> : <p>User not found</p>}
    </div>
  );
}

export default UserDetail;
