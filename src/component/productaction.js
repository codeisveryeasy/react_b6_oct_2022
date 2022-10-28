import React, { useState } from 'react';

function ProductAction() {

    const [likes, changeLikes] = useState(13)
    const [dislikes, changeDislikes] = useState(2)

    const increaseLikes = ()=>{
        changeLikes(likes + 1)
    }

    const decreaseLikes=()=>{
        changeDislikes(dislikes + 1)
    }

    return ( 
        <div  style={{
                        textAlign:"center"  ,
                        padding:"10px",
                        backgroundColor:"pink",
                        borderRadius:"10px"
        }}>
            <button onClick={increaseLikes}>Likes</button> 
            <span style={{
                        color:"brown",
                        fontSize:"50px"
            }}>
                {likes}
            </span>

            <button onClick={decreaseLikes}>Dislikes</button> 
            <span style={{
                        color:"brown",
                        fontSize:"50px"
            }}>
                {dislikes}
            </span>
            
        </div>
     );
}

export default ProductAction;