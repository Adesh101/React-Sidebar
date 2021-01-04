import React, { Component } from 'react';

const Home = () =>{

    const data=[

        {
            "name":"Apple",
            "image_url":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            "price":"1000$"

        },
        {
            "name":"Apple",
            "image_url":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            "price":"1000$"

        },
        {
            "name":"Apple",
            "image_url":"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&hei=1058&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1567022175704",
            "price":"1000$"

        }

    ];

    return (
        <>
        {console.log(data[0])}
        </>
    );
}
export default Home;