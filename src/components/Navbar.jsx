import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <div>

<Flex>
  <Box p='4' bg='red.400'>
  <h1>BocaShop</h1>
  </Box>
  <Spacer />
  <Box p='4' bg='blue.400'>
  <Menu>
       <MenuButton>
        Categorias
       </MenuButton>
       <MenuList>
       <MenuItem>Camisetas</MenuItem>
       <MenuItem>Shorts</MenuItem>
       <MenuItem>Buzos</MenuItem>
       <MenuItem>Pantalon</MenuItem>
       </MenuList>
      </Menu>
  </Box>
  <Spacer />
  <Box p='4' bg='green.400'>
  <CartWidget />
  </Box>
</Flex>
    
    </div>
  )
}

export default Navbar