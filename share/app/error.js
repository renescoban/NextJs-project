'use client';

import React from 'react'

import { useEffect }   from 'react';


const Error = ({error, reset}) => {

    useEffect(() => {
        console.error(error);
    },[error]);


  return (
    <div>
        <h2>Something went wrong!</h2>
        <button onClick={
            ()=> reset()
        }>TRY AGAIn</button>
    </div>
  );
}

export default error