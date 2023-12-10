import React, { useEffect, useState } from "react";
import axios from "axios";

import User from "./components/User";
import Album from "./components/Album";
import Photo from "./components/Photo";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`)
        .then((res) => {setAlbums(res.data);});
    }
  }, [selectedUserId]);

  useEffect(() => {
    if (selectedAlbumId) {
      axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`)
        .then((res) => {setPhotos(res.data);});
    }
  }, [selectedAlbumId]);

  return (
    <div className="App">
      <div className="users">
        <h1 className="users-header">Users</h1>
        {users.map((user) => (
          <User key={user.id} user={user} onSelectUser={setSelectedUserId} />
        ))}
      </div>
      <div className="albums">
        {albums.map((album) => (
          <Album key={album.id} album={album} onSelectAlbum={setSelectedAlbumId} />
        ))}
      </div>
      <div className="photos">
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
}

export default App;