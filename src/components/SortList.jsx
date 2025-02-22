import React, { useState } from "react";

function SortList() {
    const [isAscending, setIsAscending] = useState(true);
    const numbers = [3, 1, 4, 1, 5, 9];

    const sortedNumbers = [...numbers].sort((a, b) =>
        isAscending ? a - b : b - a
    );

    return (
        <div>
            <button onClick={() => setIsAscending(!isAscending)}>
                Sort: {isAscending ? "Descending" : "Ascending"}
            </button>
            <ul>
                {sortedNumbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        </div>
    );
}

export default SortList