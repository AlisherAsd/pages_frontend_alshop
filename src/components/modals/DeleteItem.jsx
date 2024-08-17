import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import { deleteItem } from '../../http/itemAPI';


const DeleteItem = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const DeleteItem = () => {
        let id = +value
        deleteItem(id).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
            <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить айтем по id
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placehokder="Введите id" 
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={DeleteItem}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteItem;