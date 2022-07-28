import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { products } from '../mock/products';
import ItemList from './ItemList'

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoriaId } = useParams();

  useEffect(() => {
      const getProducts = new Promise((resolve) => {
          const prodFiltrados = products.filter(
              (prod) => prod.categoria === categoriaId
          );
          setTimeout(() => {
            categoriaId ? resolve(prodFiltrados) : resolve(products);
          }, 3000);
      });
      getProducts
          .then((data) => {
              setItems(data);
          })
          .catch((error) => {
              console.log(error);
          });
  }, [categoriaId]);


  return (
    <div>
         {!items ?
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        :  <ItemList items={items}/>
        }
    </div>
  )
}

export default ItemListContainer