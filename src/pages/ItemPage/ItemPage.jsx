import React, { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Image from 'react-bootstrap/esm/Image';
import {useParams} from 'react-router-dom'
import { getItem } from '../../http/itemAPI';
import {REACT_APP_API_ROUTE} from '../../utils/consts'
import { Context } from '../..'
import { AddItemBasket } from '../../http/basketAPI';
import './ItemPage.css'
import Button from 'react-bootstrap/Button';
import { items } from '../../db';


const ItemPage = () => {

    const {user} = useContext(Context) 

    const [item, setItem] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        const res = items.find(item => item.id === +id)
        console.log(items);
        
        setItem(res)
    }, [])

    const ClickBasketItem = () => {
        console.log(item.id);
        console.log(user.UserId);
        AddItemBasket(user.UserId, item.id).then(data => {
            console.log('ADD ITEM IN BASKET');
        })
    }


    return (
        
      <div className='container'>
        <div class="left-column">
            <img src={item.img} 
            style={{width: '80%', marginTop: '10%'}}
            />
           
        </div>
        
      
        <div class="right-column">
        
            
            <div class="product-description">
                
                <h1>{item.name}</h1>
                <p>Rating: {item.rating}</p>
            
                <p>{item.description}</p>
            </div>
        
        

            <div class="product-price">
                <h3>{item.price}$</h3>
                <div className='btnn'>
                    <Button onClick={ClickBasketItem}>Добавить в корзину</Button>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ItemPage;