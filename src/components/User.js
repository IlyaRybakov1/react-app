import React from "react";
import "../App.css";
const User = ({ user, onSelectUser }) => (
  <div>
    <h2>{user.name}</h2>
    <button className="user" onClick={() => onSelectUser(user.id)}>See album</button>
  </div>
);

export default User;