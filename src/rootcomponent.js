import React from 'react';
import ProductList from './component/productlist';
import UserList from './component/userlist';



function RootComponent() {
    return ( 
        <div>
            <h1>I am root component!</h1>
            <h2>LIVE reload</h2>
           <ProductList></ProductList>
           <UserList></UserList>
        </div>
     );
}

export default RootComponent;

