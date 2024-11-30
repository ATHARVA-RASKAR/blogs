import React from 'react';
import Child from './Child';

const Parent = () => {
    return (
        <div>
            <h1>Hello from the Parent component!</h1>
            <Child message="Hello from the Child component!" />
        </div>
    );
}
export default Parent;