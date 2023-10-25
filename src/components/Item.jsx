import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, ButtonGroup, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({nombre, id}) => {
  return (
    <div>
        <Card maxW='sm'>
  <CardBody>
    <Text>
      Image
    </Text>
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{nombre}</Heading>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link to={`/product/${id}`}>
      <Button variant='solid' colorScheme='blue'>
        Ver Detalles del Producto
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
    </div>
  )
}

export default Item