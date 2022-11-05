import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const user = useLoaderData();
  const [displayUser, setDesplayUser] = useState(user);

  const handleDelete = (clients) => {
    const agree = window.confirm(
      `Are you sure, you want to delete? ${clients.name}`
    );
    if (agree) {
      fetch(`https://mongo-server-practice.vercel.app/user/${clients._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`${clients.name} is deleted.`);
            const remainingUser = displayUser.filter(
              (usr) => usr._id !== clients._id
            );
            setDesplayUser(remainingUser);
          }
        });
    }
  };

  return (
    <div>
      <h1>user: {displayUser.length}</h1>
      {displayUser.map((clients) => (
        <div
          style={{ border: "2px solid red", margin: "10px", padding: "10px" }}
          key={clients._id}
        >
          <h3>name: {clients.name}</h3>
          <h3>email: {clients.email}</h3>
          <button onClick={() => handleDelete(clients)}>X</button>
          <Link to={`/update/${clients._id}`}>
            <button style={{ margin: "10px" }}>Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
