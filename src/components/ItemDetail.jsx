import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardFooter, ButtonGroup, Button, Stack, Heading, Divider, Text } from '@chakra-ui/react'
import ItemCount from './ItemCount'

const ItemDetail = ( {productos }) => {

  const { id } = useParams()

  const filterProduct = productos.filter((producto) => producto.id === id)

  return (
    <>
    {
    filterProduct.map((p)=>{
      return(
        <Card maxW='sm'>
  <CardBody>
    <Text>
      Image
    </Text>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{p.nombre}</Heading>
    </Stack>
  </CardBody>
  <Text>
    {p.descripcion}
  </Text>
  <Divider />
  <Text>
    $ {p.precio}
  </Text>
  <CardFooter>
    <ButtonGroup spacing='2'>
      <ItemCount/>
    </ButtonGroup>
  </CardFooter>
</Card>
      )
    } )
    }
    

    </>
  )
}

export default ItemDetail