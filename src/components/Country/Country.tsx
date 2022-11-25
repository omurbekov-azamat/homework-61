import React from 'react';

interface Props {
  name:string
  onClick: React.MouseEventHandler;
}

const Country:React.FC<Props> = (props) => {
  return (
    <p className='border-bottom border-dark bg-success m-0 bg-opacity-25 p-1' onClick={props.onClick}>{props.name}</p>
  );
};

export default Country;