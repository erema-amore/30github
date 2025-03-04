import React, { useState } from "react";

function AuthStatus() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <p>{loggedIn ? "Logged In" : "Logged Out"}</p>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        Toggle Login
      </button>
    </div>
  );
}

export default AuthStatus;
