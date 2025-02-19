import React, { useState } from "react";

function FilterList() {
    const [query, setQuery] = useState("");
    const names = ["Alice", "Bob", "Charlie"];
    const filteredNames = names.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul>
                {filteredNames.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default FilterList