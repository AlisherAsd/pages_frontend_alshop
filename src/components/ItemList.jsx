import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import Row from 'react-bootstrap/esm/Row';
import Item from './Item';
import '../App.css'
import { items } from '../db';

const ItemList = observer(({search}) => {

    
    return (
        <div className="centerItem">
            <Row className="centerItem" style={{padding: '2% 0 2% 0'}}>
                {!search ? 
                items.map(item => 
                    <Item key={item.id} item={item} />
                ) : 
                items.map(item => {
                    if (item.name.includes(search)) {
                        return <Item key={item.id} item={item} />
                    }
                })}
            </Row>
        </div>
    );
});

export default ItemList;