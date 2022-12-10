import React from 'react';
import CafeItem from './CafeItem';

function ListCafe({ cafes }) {
  if (!cafes.length) {
    return <p>No notes found</p>;
  }
  return (
    <div className="cafe-list">
      {cafes.map((cafe) => (
        <CafeItem key={cafe.id} {...cafe} />
      ))}
    </div>
  );
}

export default ListCafe;
