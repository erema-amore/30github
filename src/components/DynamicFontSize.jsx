import React, { useState } from "react";

function DynamicFontSize() {
    const [fontSize, setFontSize] = useState(16);

    return (
        <button
            style={{ fontSize: `${fontSize}px` }}
            onClick={() => setFontSize(fontSize + 2)}
        >
            Increase Font
        </button>
    );
}

export default DynamicFontSize