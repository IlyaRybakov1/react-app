import React from "react";

const Photo = ({ photo }) => (
  <img src={photo.url} alt={photo.title} />
);

export default Photo