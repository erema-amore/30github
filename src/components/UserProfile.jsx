import React, { useState } from "react";

function UserProfile() {
    const [profile, setProfile] = useState({
        name: "",
        age: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    return (
        <div>
            <input
                name="name"
                placeholder="Name"
                value={profile.name}
                onChange={handleChange}
            />
            <input
                name="age"
                placeholder="Age"
                value={profile.age}
                onChange={handleChange}
            />
            <input
                name="country"
                placeholder="Country"
                value={profile.country}
                onChange={handleChange}
            />
            <p>
                Name: {profile.name}, Age: {profile.age}, Country:{" "}
                {profile.country}
            </p>
        </div>
    );
}
export default UserProfile