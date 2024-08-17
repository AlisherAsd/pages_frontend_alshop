import './Info.css'


import React from 'react';

const Info = () => {
    return (
        <div className='container_info'>
            <div className='title'>
                <h1>Through the Power of Community, ALSHOP</h1>
                <h2>Inc. Advances Toward a Better World for All</h2>
                <img src='https://scalebranding.com/wp-content/uploads/2021/12/LOGO-MINIMAL-BLACK-HAWK.jpg'
                style={{height: 100}}/>
            </div>
            <div className='Img'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumgJQGdLQCoRW7GsH-qb93ez9Be8FfIWEHw&s'
                style={{width: '100%'}}/>
            </div>
            <div className='ftitle'>
                <h3>This project created with</h3>
                <h4>express, sequilize, postgres, react, mobx, bootstrap</h4>
                <h5>By AlisherAsd</h5>
            </div>
        </div>
    );
};

export default Info;