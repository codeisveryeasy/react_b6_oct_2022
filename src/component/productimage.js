import React from 'react';

function ProductImage(props) {

    let imageName = props.media + ".jpg"

    return (
        <div style={{
                    border:"1px solid green",
                    margin:"2px"  ,
                    padding:"5px",
                    textAlign:"center"
        }}>
           <img src={require(`../assets/${imageName}`)} alt="product image" />
        </div>
      );
}

export default ProductImage;