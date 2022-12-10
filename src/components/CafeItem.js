import React from 'react';
import { Link } from 'react-router-dom';

function CafeItem({ id, title, image, location }) {
  return (
    <div className="cafe-item">
      <div className="cafe-item__header">
        <img src={image} alt="" />
      </div>
      <div className="cafe-item__body">
        <h4 className="cafe-item__title">{title}</h4>
        <h6 className="cafe-item__location">{location}</h6>
        <p className="read_more">
          <Link to={`/cafes/${id}`}>Read More</Link>
        </p>
      </div>
    </div>
  );
}

export default CafeItem;
