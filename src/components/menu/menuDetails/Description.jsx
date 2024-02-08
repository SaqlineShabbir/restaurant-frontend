import React from 'react';

const Description = ({ menu }) => {
  console.log(menu);
  return (
    <div>
      <p>{menu?.description}</p>
    </div>
  );
};

export default Description;
