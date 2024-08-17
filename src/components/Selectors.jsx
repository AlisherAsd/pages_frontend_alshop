import React, { useContext } from 'react';
import { Context } from '..';
import { Dropdown, FormGroup } from 'react-bootstrap';

const TypeSelector = () => {
    const {item} = useContext(Context)
    
    // Присваиваем value который даем пробегая по массиву из state 
    return (
        <>
            <Dropdown style={{marginRight: 10}} name="select" onChange={(e) => {
                item.setSelectedType(e.target.value)
            }
            }>
                <Dropdown.Toggle>Выбрать тип</Dropdown.Toggle>
                <Dropdown.Menu>
                    {item.types.map(type =>  
                        <Dropdown.Item
                            key={type.id}
                            onClick={() => item.setSelectedType(type.id)}
                        >
                            {type.name}
                        </Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
            

            <Dropdown style={{marginRight: 10}} name="select" onChange={(e) => {
                item.setSelectedBrand(e.target.value)
            }
            }>
                <Dropdown.Toggle>Выбрать брэнд</Dropdown.Toggle>
                {item.brands.map(brand => 
                    <Dropdown.Menu>
                        <Dropdown.Item
                            key={brand.id}
                            onClick={() => item.setSelectedBrand(brand.id)}
                        >
                        {brand.name}
                    </Dropdown.Item>
                    </Dropdown.Menu>
                )}
            </Dropdown>
        </>
    );
};

export default TypeSelector;