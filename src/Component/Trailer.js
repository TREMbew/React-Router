import React from 'react';

const Trailer = ({match, history}) => {
    console.log(history)
    return (
        <div style={{textAlign:'center'}}>
            <div style={{color:'white', fontSize:25}}>Hello!!</div>
            <button style={{width:200, height:50}} onClick={() => {
                history.push('/');
            }}>Go To Home</button>
        </div>
    )
}

export default Trailer
