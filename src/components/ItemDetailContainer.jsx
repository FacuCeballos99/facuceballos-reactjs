import React from 'react'
import ItemDetail from './ItemDetail.jsx'
import { Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const { id } = useParams()
  const [productos, setProductos] = useState([]);
  console.log(productos)
  useEffect(() => {
    const db = getFirestore()
    const oneItem = doc(db, "ropadeportiva", `${id}`)


    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs = snapshot.data()
        setProductos(docs)
      }
    })
  }, []);


  return (
    <>
      <Center p="0,5rem">
        <ItemDetail productos={productos} />
      </Center>
    </>
  )
}

export default ItemDetailContainer