import React from 'react';

function ProductTitle(props) {

    let productTitle = props.title


    return ( 
        <div style={{
                        color:"orange",
                        border:"4px dotted orange",
                        padding:"5px"

        }}>
            <h1>{productTitle}</h1>
        </div>
     );
}

export default ProductTitle;