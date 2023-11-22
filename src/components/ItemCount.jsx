import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'


const ItemCount = () => {
  const [count, setCount] = useState(0)

  const restCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Flex>
      <Box>
        <Button
          variant="outline"
          colorScheme="teal"
          onClick={restCount}
          m={1}
          disabled={count === 0}
        >
          -
        </Button>
        <Button m={1}>{count}</Button>

        <Button variant='outline' colorScheme='teal' onClick={() => setCount(count + 1)}
          m={1}
        >
          +
        </Button>
      </Box>
      <Spacer />
      {/* <Box m={1}>
        <Button variant='solid' colorScheme='rgb(3, 3, 59);'>Agregar al Carrito</Button>
    </Box> */}




    </Flex>
  )
}

export default ItemCount