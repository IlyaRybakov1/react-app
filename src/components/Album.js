import React from "react";
import "../App.css";


const Album = ({ album, onSelectAlbum }) => (
  <button className="button" onClick={() => onSelectAlbum(album.id)}>
    {album.title}
  </button>
);


export default Album;