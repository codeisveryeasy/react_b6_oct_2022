import React from 'react';
import Product from './product';


function ProductList() {
    return ( 
        <div style={{
                    border:"1px solid grey",
                    padding:"5px"
                    }}>
            <h1>List of products</h1>
            <Product name="Iphone 17 Pro" image="iphone"></Product>
            <Product name="Samsung 22 Note Pro" image="note"></Product>
            <Product name="DJI Tello" image="tello"></Product>
            <Product name="Drone Car" image="dronecar"></Product>
        
        </div>
     );
}

export default ProductList;