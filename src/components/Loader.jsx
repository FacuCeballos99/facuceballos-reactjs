import React from 'react'
import { Spinner } from '@chakra-ui/react'


const Loader = () => {
    return (
        <Spinner className='loader'>
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
        </Spinner>
    )
}

export default Loader