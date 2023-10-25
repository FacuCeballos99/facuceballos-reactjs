import React from 'react'
import CartWidget from './CartWidget.jsx'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import "./Estilos.css"
import navBarLogo2 from '../assets/img/logo-boca.png'
import { Link } from 'react-router-dom'


const Navbar = ({}) => {
  return (
    <div>

<Flex className='navbarstyle'>
  <Box className='color-nav' p='4'>
    <Link to='/'>
    <img src={navBarLogo2} className="logo-navbar" alt="Logo de la Tienda" />
    </Link>
  </Box>
  <Spacer />
  <Box p='4'>
  <Menu>
       <MenuButton className='color-nav'>
        Categorias
       </MenuButton>
       <MenuList>
       <Link to={`/category/${'Camisetas'}`}>
       <MenuItem >Camisetas</MenuItem>
        </Link>
        <Link to={`/category/${'Shorts'}`}>
       <MenuItem>Shorts</MenuItem>
        </Link>
        <Link to={`/category/${'Buzos'}`}>
       <MenuItem>Buzos</MenuItem>
        </Link>
       </MenuList>
      </Menu>
  </Box>
  <Spacer />
  <Box className='color-nav' p='4'>
  <Link to='/cart'>
  <CartWidget />
  </Link>
  </Box>
</Flex>
    
    </div>
  )
}

export default Navbar