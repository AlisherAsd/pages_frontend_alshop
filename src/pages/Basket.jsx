import React, { useContext, useEffect } from 'react';
import {getItemBasket} from '../http/basketAPI'
import { Context } from '..';
import Item from '../components/Item';
import {check} from '../http/userApi'



const Basket = () => {

    const {user} = useContext(Context)
    const {item} = useContext(Context)

    check().then(data => {
        user.setUserName(data.email)
        user.setRole(data.role)
        user.setUserId(data.id)
    })

    useEffect(() => {
        getItemBasket(user.UserId || 3).then(data => {
           user.setItemBasket(data)
        })
    }, [])

      useEffect(() => {
        getItemBasket(user.UserId || 3).then(data => {
           user.setItemBasket(data)
        })
    }, [])

    useEffect(() => {
        const result = []
        function asd() {
            item.items.map(el1 => {
                user.ItemBasket.map(el2 => {
                    if (el1.id === el2.itemId) {
                        result.push(el1)
                    }
                })
            })
        }
        asd()
        item.setSelectedItems(result)
    }, [])
   
    return (
        <div style={{textAlign: 'center', margin: '5% 10% 5% 10%'}}>
          
            <h1>Basket by {user.UserName}</h1>
            <h2>Items:</h2>
            <div>
                {item.SelectedItems.map(el => {
                    return (
                        <div>
                            <Item item={el} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Basket;