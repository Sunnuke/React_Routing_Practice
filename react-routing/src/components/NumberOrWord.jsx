import React from 'react';
import { navigate } from '@reach/router';

export default (props) => {
    return(
        <>
            <div>
                {
                    isNaN(+props.input)
                    ? <h1 style={{color: props.c1, backgroundColor: props.c2}}>The Word is: {props.input}</h1>
                    : <h1>The Number is: {props.input}</h1>
                }
            </div>
        </>
    )
}