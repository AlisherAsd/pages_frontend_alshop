import React, { useContext, useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import {Context} from '../../'
import { getBrands, getItems, getTypes, createItem } from '../../http/itemAPI';
import Dropdown from 'react-bootstrap/Dropdown';
import { observer } from 'mobx-react-lite';


const CreateItem = observer(({show, onHide}) => {

    const {item} = useContext(Context)


    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        getTypes().then(data => item.setTypes(data))
        getBrands().then(data => item.setBrands(data))
        getItems().then(data => item.setItems(data.rows))
    }, [])

    const addItem = () => {

        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('brandId', item.selectedBrand.id)
        formData.append('typeId', item.selectedType.id)
        console.log(formData)
        createItem(formData).then(data => onHide())

    }

    const selectFile = e => {
        setFile(e.target.files[0])
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
                <h1>Добавить айтем</h1>
            </Modal.Header>
            <Modal.Body>

                    <Dropdown>
                        <Dropdown.Toggle>{item.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.types.map(type => 
                                <Dropdown.Item 
                                    key={type.id}
                                    onClick={() => item.setSelectedType(type)}
                                >{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle>{item.selectedBrand.name || 'Выберите брэнд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {item.brands.map(brand => 
                                <Dropdown.Item 
                                    key={brand.id}
                                    onClick={() => item.setSelectedBrand(brand)}
                                >{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    
                        <Form.Control 
                            placeholder='Введите нзвание айтема'
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <Form.Control 
                            placeholder='Введите описание айтема'
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        />
                        <Form.Control 
                            placeholder='Введите стоимость айтема'
                            onChange={e => setPrice(+e.target.value)}
                            value={price}
                            type='number'
                        />
                        <Form.Control 
                            placeholder='Втавьте картинку айтема'
                            type='file'
                            onChange={selectFile}
                        />

            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addItem}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateItem;