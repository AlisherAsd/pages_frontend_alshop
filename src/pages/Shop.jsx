import React, { useContext, useEffect } from 'react';
import Container from 'react-bootstrap/esm/Container';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { getBrands, getItems, getTypes } from '../http/itemAPI'
import {check} from '../http/userApi'
import CarouselPage from '../components/homepage/Carousel';
import { NavLink } from 'react-router-dom';
import { INFO_ROUTER, ITEM_ROUTE, LOGIN_ROUTE } from '../utils/consts';


const Shop = observer(() => {

    const {item} = useContext(Context)
    

    useEffect(() => {
        getTypes().then(data => item.setTypes(data))
        getBrands().then(data => item.setBrands(data))
        getItems(1, 1, 1, 3).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
    }, [])
    

    return (
        <>
            <CarouselPage />
            <div style={{
                textAlign: 'center',
                margin: '10%'}}>
                <h1>Welcom to the shop!</h1>
                <img src='https://scalebranding.com/wp-content/uploads/2021/12/LOGO-MINIMAL-BLACK-HAWK.jpg'
                style={{height: 200}}
                />
                <NavLink 
                style={{textDecoration: 'none', color: 'black'}}
                to={ITEM_ROUTE}><h2>Go to shop</h2></NavLink>
                <NavLink 
                style={{textDecoration: 'none', color: 'black'}}
                to={INFO_ROUTER}><h3>About us</h3></NavLink>
                <NavLink 
                style={{textDecoration: 'none', color: 'black'}}
                to={LOGIN_ROUTE}><h4>Login</h4></NavLink>
            </div>
        </>
    );
});

export default Shop;