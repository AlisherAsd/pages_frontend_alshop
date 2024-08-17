import React, { useContext } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Card from 'react-bootstrap/esm/Card';
import Button from 'react-bootstrap/Button';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { BASKET_ROUTE, ITEM_ROUTE, REACT_APP_API_ROUTE } from '../utils/consts';
import { Context } from '..'
import { AddItemBasket, deleteItemBasket } from '../http/basketAPI';


const Item = ({item}) => {

    const {user} = useContext(Context) 

    
    const navigate = useNavigate()
    const location = useLocation()
    const item_list = location.pathname === ITEM_ROUTE
    const delete_list = location.pathname === BASKET_ROUTE + '/' + user.UserId
    
    const ClickBasketItem = () => {
        navigate('/')
        AddItemBasket(user.UserId, item.id).then(() => {
            console.log('ADD ITEM IN BASKET');
        })
    }

    const ClickDeleteBasketItem = () => {
        navigate('/')
        console.log(user.UserId, item.id);
        
        deleteItemBasket(user.UserId, item.id).then(() => {
            console.log('DELETE ITEM FROM BASKET');
        })
    }

    return (
        <>
            <Col md={6} style={{width: 200, cursor: 'pointer'}}>
                <Card>
                    <NavLink to={ITEM_ROUTE + '/' + item.id} style={{textDecoration: 'none', color: 'black'}}>
                        <Card.Img  variant="top" style={{width: 180, height: 180}} 
                        src={item.img}
                        />   
                        <Card.Title>{item.name}</Card.Title>
                    </NavLink>
                    <Card.Body>
                        <p>{item.price}$</p>
                        {item_list ? 
                            <Button variant="light" onClick={ClickBasketItem}>Добавить в корзину</Button>
                        : <></>}
                        {delete_list ? 
                            <Button variant="light" onClick={ClickDeleteBasketItem}>Удалить из корзины</Button>
                        : <></>}
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Item;