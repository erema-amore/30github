import React, { useState } from "react";

function ToggleColor() {
  const [isRed, setIsRed] = useState(false);

  return (
    <p
      onClick={() => setIsRed(!isRed)}
      style={{ color: isRed ? "red" : "black" }}
    >
      Click to change color
    </p>
  );
}

export default ToggleColor;

