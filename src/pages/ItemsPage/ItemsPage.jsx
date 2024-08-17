import React, { useContext, useEffect, useState } from 'react';
import './ItemsPage.css'
import ItemList from '../../components/ItemList';
import Selectors from '../../components/Selectors'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';
import { getItems } from '../../http/itemAPI';
import Pages from '../../components/Pages';


const ItemsPage = observer(() => {
    
    const {item} = useContext(Context)

    const [search, setSearch] = useState('')

    useEffect(() => {
        getItems(item.selectedType, item.selectedBrand, item.page, 10).then(data => {
            item.setItems(data.rows)
            item.setTotalCount(data.count)
        })
        
    }, [item.page, item.selectedType, item.selectedBrand])


    return (
        <div className='itemspage-container'>
            <input
                    placeholder='Введите название'
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            <div className='select'>
                <Selectors/>
            </div>
            <Row>
                <Col md={12}>
                    <ItemList className='centerItem' search={search}/>
                </Col>
            </Row>
            <div className="text-center">
                <Pages/>
            </div>
            <div className="Text-center">
                <p>© 2006—2024 AO"ALSHOP"</p>
            </div>
        </div>
    );
});

export default ItemsPage;