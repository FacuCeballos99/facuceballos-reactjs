import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p)=>{
                return(
                    <Item
                    id={p.id}
                    nombre={p.nombre}
                    descripcion={p.descripcion}
                    precio={p.precio}
                    imagen={p.imagen}
                    />
                )
            })
        }
    </div>
  )
}

export default ItemList