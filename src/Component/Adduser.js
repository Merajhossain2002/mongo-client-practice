import React, { useState } from "react";

const Adduser = () => {
  const [user, setUser] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);

    fetch("https://mongo-server-practice.vercel.app/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
  };

  return (
    <div>
      <h1>Please add user</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputBlur}
          type="text"
          name="name"
          placeholder="your name"
        />
        <br />
        <input
          onChange={handleInputBlur}
          type="email"
          name="email"
          placeholder="yourName@gmail.com"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Adduser;
