import React from 'react';
import ProductAction from './productaction';
import ProductImage from './productimage';
import ProductTitle from './title';

function Product(props) {
    return ( 
        <div style={{
                        border:"1px solid red",
                        padding:"5px",
                        margin:"5px"
                    }}>
             <ProductTitle title={props.name}></ProductTitle>
             <ProductImage media={props.image}></ProductImage>           
             <ProductAction></ProductAction>       
        </div>
     );
}

export default Product;