import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, Button, Stack, Heading, Divider, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ productos }) => {
  const { id } = useParams()
  const { addItemCart } = useContext(CartContext)
  const [count, setCount] = useState(1)

  const handleOnAdd = () => {
    if (!isNaN(count) && count > 0) {
      const item = {
        id,
        name: productos.nombre,
        price: productos.precio,
      }
      addItemCart(item, count)
    } else {
      console.log("Cantidad inválida")
    }
  }

  return (
    <Card
      key={productos.id}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Stack>
        <CardBody>
          <img src={productos.imagen} alt={productos.nombre} />
          <Heading size="md">{productos.nombre}</Heading>
          <Divider />
          <Text py="2">{productos.descripcion}</Text>
          <Divider />
          <Text color="rgb(3, 3, 59);" fontSize="2xl">
            $ {productos.precio}
          </Text>
        </CardBody>
        <ItemCount quantity={count} setQuantity={setCount} />
        <CardFooter>
          <Button
            variant="solid"
            colorScheme='rgb(3, 3, 59);'
            onClick={handleOnAdd}
          >
            Agregar al Carrito
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default ItemDetail
