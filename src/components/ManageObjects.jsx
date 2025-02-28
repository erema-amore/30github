import React, { useState } from "react";

function ManageObjects() {
    const [items, setItems] = useState([{ id: 1, name: "Item 1" }]);
    const [newName, setNewName] = useState("");

    const addItem = () => {
        setItems([...items, { id: items.length + 1, name: newName }]);
        setNewName("");
    };

    const updateName = (id, newName) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, name: newName } : item
            )
        );
    };

    return (
        <div>
            <input
                placeholder="New item name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <input
                            value={item.name}
                            onChange={(e) =>
                                updateName(item.id, e.target.value)
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ManageObjects