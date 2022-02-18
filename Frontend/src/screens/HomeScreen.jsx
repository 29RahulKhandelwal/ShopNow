import React from "react";

function HomeScreen(){
    return (
        <div className="row center">
            {
                data.products.map((product)=>{
                    return <Product key={product._id} product={product} />
                })
            }
        </div>
    )
}

export default HomeScreen;
