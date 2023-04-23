import React, {useState} from 'react';

export default function Toggle() {

    const[status, setStatus] =  useState(true);

    return(
        <div className='App'>
            {
                status? <h2>Hello User</h2> : null
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
        </div>
    )
}