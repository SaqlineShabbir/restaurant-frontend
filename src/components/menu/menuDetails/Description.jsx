import React from 'react';

const Description = ({ menu }) => {

  return (
    <div>
      <p>{menu?.description}</p>
    </div>
  );
};

export default Description;
