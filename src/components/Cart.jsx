import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Flex, Button, Center } from '@chakra-ui/react';


const Cart = () => {

  const { cart, clearCart, totalQuantity, totalPrice, removeItem } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <Flex>
          <Center>
            <h2>No hay productos en el carrito</h2>
            <Button as={Button} colorScheme="rgb(3, 3, 59);">
              <Link to="/" className="Option">
                Volver
              </Link>
            </Button>
          </Center>
        </Flex>
      </div>
    );
  }
  return (
    <div>
      <h2>Contenido del carrito:</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - Cantidad: {item.quantity} - Precio por unidad: $
            {item.price}{" "}
            <Button onClick={() => removeItem(item.id)} colorScheme="red">
              Eliminar
            </Button>
          </li>
        ))}
        <h3>Total: ${totalPrice}</h3>
        <Button onClick={() => clearCart()} className="Button">
          Vaciar carrito
        </Button>
        <Button as={Link} to={"/Form"} variant="solid" colorScheme="blue">
          Finalizar compra
        </Button>

      </ul>
    </div>

  )
};

export default Cart