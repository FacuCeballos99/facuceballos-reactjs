import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import "./Estilos.css"
import navBarLogo2 from '../assets/img/logo-boca.png'

const Navbar = () => {
  return (
    <div>

<Flex className='navbarstyle'>
  <Box className='color-nav' p='4'>
    <img src={navBarLogo2} className="logo-navbar" alt="Logo de la Tienda" />
  </Box>
  <Spacer />
  <Box p='4'>
  <Menu>
       <MenuButton className='color-nav'>
        Categorias
       </MenuButton>
       <MenuList>
       <MenuItem >Camisetas</MenuItem>
       <MenuItem>Shorts</MenuItem>
       <MenuItem>Buzos</MenuItem>
       <MenuItem>Pantalon</MenuItem>
       </MenuList>
      </Menu>
  </Box>
  <Spacer />
  <Box className='color-nav' p='4'>
  <CartWidget />
  </Box>
</Flex>
    
    </div>
  )
}

export default Navbar