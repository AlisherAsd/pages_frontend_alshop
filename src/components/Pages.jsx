import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Pagination} from 'react-bootstrap'

const Pages = observer(() => {

    const {item} = useContext(Context)
    const pageCount = Math.ceil(item.total_Count / item.limit)

    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <div className='container-pages'>
            <Pagination 
            className='mt-5'>
                {pages.map(page => {
                    return <Pagination.Item
                        key={page}
                        active={item.page === page}
                        onClick={() => item.setPage(page)}
                    >
                        {page}</Pagination.Item>
                })}
            </Pagination>
        </div>
    );
});

export default Pages;