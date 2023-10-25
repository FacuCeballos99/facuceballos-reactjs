import React from 'react'
import ItemDetail from './ItemDetail.jsx'
import { Center } from '@chakra-ui/react'


const ItemDetailContainer = () => {

  const productos = [
    {id: "1", nombre: "Camiseta Titular", descripcion: "Camiseta Titular de Boca Juniors version jugador", categoria: "Camisetas", precio: 34000, stock: 12},
    {id: "2", nombre: "Camiseta Suplente", descripcion: "Camiseta Suplente de Boca Juniors version jugador", categoria: "Camisetas", precio: 34000, stock: 18},
    {id: "3", nombre: "Camiseta Alternativa", descripcion: "Camiseta Alternativa de Boca Juniors version jugador", categoria: "Camisetas", precio: 34000, stock: 5},
    {id: "4", nombre: "Short Titular", descripcion: "Short Titular de Boca Juniors version jugador", categoria: "Shorts", precio: 18000, stock: 8},
    {id: "5", nombre: "Short Suplente", descripcion: "Short Suplente de Boca Juniors version jugador", categoria: "Shorts", precio: 18000, stock: 10},
    {id: "6", nombre: "Short Alternativo", descripcion: "Short Alternativo de Boca Juniors version jugador", categoria: "Shorts", precio: 18000, stock: 3},
    {id: "7", nombre: "Campera Rompe Vientos", descripcion: "Campera Rompe Vientos de Boca Juniors", categoria: "Buzos", precio: 50000, stock: 2},
  ]
  
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)
    } else {
      reject("No hay productos")
    }
  })
  
  mostrarProductos
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })
  
  return (
    <>
    <Center p = "0,5rem">
    <ItemDetail productos={productos}/>
    </Center>
    </>
  )
}

export default ItemDetailContainer