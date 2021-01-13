import React from 'react';
import { navigate } from '@reach/router';

export default (props) => {
    return(
        <>
            {
                isNaN(+props.input)
                ? <h1>The Word is: {props.input}</h1>
                : <h1>The Number is: {props.input}</h1>
            }
        </>
    )
}