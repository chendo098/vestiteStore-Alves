import React, { useEffect, useState } from 'react'
import { products } from '../mock/products';
import Item from './Item';
import { Spinner } from 'react-bootstrap';

const ItemList = () => {
const [items, setItems] = useState()
console.log("🚀 ~ file: ItemList.jsx ~ line 7 ~ ItemList ~ items", items)

    const getProducts = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    });
    
    useEffect(() => {
        getProducts
        .then((data) => {
            setItems(data);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])

  return (
    <div className='container m-auto row wrap'>
        {!items ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : items.map(item => 
        <div className='col-4'>
        <Item key={item.id} item={item}/>
        </div>
        )}
    </div>
  )
}

export default ItemList