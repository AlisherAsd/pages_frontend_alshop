import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/esm/Button';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateItem from '../components/modals/CreateItem';
import DeleteItem from '../components/modals/DeleteItem';

const Admin = () => {

    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [itemVisible, setItemVisible] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button
            onClick={() => setTypeVisible(true)}
            >
                Добавить тип</Button>
            <Button
            onClick={() => setBrandVisible(true)}
            >
                Добавить брэнд</Button>
            <Button
            onClick={() => setItemVisible(true)}
            >
                Добавить итем</Button>
            <Button
            onClick={() => setDeleteVisible(true)}
            >
                Удалить итем</Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false) }/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false) } />
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false) } />
            <DeleteItem show={deleteVisible} onHide={() => setDeleteVisible(false) } />
        </Container>
    );
};

export default Admin;