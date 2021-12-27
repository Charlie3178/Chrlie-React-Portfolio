import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    // Needed Data
    // Background image: thumb_image_url 
    // Logo
    // Description: description
    // ID: id
    const { id, description } = props.item;
  return (
    <div>
      <div>
        {description}
      </div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}