import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const client = useLoaderData();
  const [user, setUser] = useState(client);

  const handleUpdate = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://mongo-server-practice.vercel.app/user/${client._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.dir);
  };

  const handleInputChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };
  return (
    <div>
      <h2>Update {client.name} Profile</h2>
      <form onSubmit={handleUpdate}>
        <input
          defaultValue={client.name}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          defaultValue={client.email}
          onChange={handleInputChange}
          type="email"
          name="email"
          placeholder="yourName@gmail.com"
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
