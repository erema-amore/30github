import React, { useState } from "react";

function Profile() {
    const [profile, setProfile] = useState({ name: "Alice", age: 25 });

    const updateName = () => setProfile({ ...profile, name: "Bob" });

    return (
        <div>
            <p>Name: {profile.name}, Age: {profile.age}</p>
            <button onClick={updateName}>Change Name</button>
        </div>
    );
}

export default Profile