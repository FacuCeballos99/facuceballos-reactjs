import React from 'react'
import ItemList from './ItemList.jsx'
import Item from './Item.jsx'
import { useParams } from 'react-router-dom'
import { Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Loader from './Loader.jsx'


const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  console.log(productos)
  const { category } = useParams()

  useEffect(() => {
    const db = getFirestore()

    const itemsCollection = collection(db, "ropadeportiva")

    getDocs(itemsCollection).then((response) => {
      setProductos(response.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })
  }, [])


  const filterProduct = productos.filter((producto) => producto.category == category)

  return (
    <div>
      {/* <Loader /> */}
      <>
        <Center p="1rem">
          {category ? <ItemList productos={filterProduct} /> : <ItemList productos={productos} />}
        </Center>
      </>

    </div>
  )
}

export default ItemListContainer