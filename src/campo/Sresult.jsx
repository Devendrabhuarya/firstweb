import React from 'react';

export const Sresult = (props) => {
    let IMG= `https://source.unsplash.com/600x400/?${props.name}`;
    console.log(props.name);
  return (
    <div>
        <img src={IMG} alt="error 404!" />
    </div>
  );
}
