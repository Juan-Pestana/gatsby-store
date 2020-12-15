import React, {useState, useContext} from 'react'
import CartContext from '../../context/CartContext'
import {ProductQuantityAdderWrapper} from './styles'
import {Input} from '../Input'
import {Button} from '../Button'

export function ProductQuantityAdder ({variantId, available}) {

    const[quantity, setQuantity] = useState(1)
    const {updateLineItem} = useContext(CartContext)

    const handleQuantityChange = e =>{
        setQuantity(e.currentTarget.value)
    }

    const handleSubmit = e =>{
        e.preventDefault()

        updateLineItem({variantId, quantity : parseInt(quantity, 10)})

        
    }

    return (
        <ProductQuantityAdderWrapper>
            <strong>Quantity</strong>
            <form onSubmit={handleSubmit}>
                <Input 
                    disabled ={!available}
                    type='number' 
                    min='1' 
                    step='1' 
                    value = {quantity} 
                    onChange={handleQuantityChange}/>
                <Button type='submit' fullWidth disabled={!available}>
                    Add to cart
                </Button>
            </form>
        </ProductQuantityAdderWrapper>
    )
}


