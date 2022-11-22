import React from 'react';

interface Props {
  name:string
}

const Country:React.FC<Props> = (props) => {
  return (
    <p>{props.name}</p>
  );
};

export default Country;