import React, { useState } from "react";

function SortComponent() {
    const [sortBy, setSortBy] = useState("name");

    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 22 },
        { id: 3, name: "Charlie", age: 30 },
    ];

    const sortedUsers = [...users].sort((a, b) =>
        a[sortBy] > b[sortBy] ? 1 : -1
    );

    return (
        <div>
            <select onChange={(e) => setSortBy(e.target.value)}>
                <option value="name">Name</option>
                <option value="age">Age</option>
            </select>
            <ul>
                {sortedUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SortComponent