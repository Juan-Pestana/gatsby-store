import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {CartWrapper} from './styles'
import { FaShoppingCart} from 'react-icons/fa'


export function Cart (){

    const {checkout} = useContext(CartContext)
       

        let totalQuatity = 0
        if(checkout){
            checkout.lineItems.forEach(lineItem =>{
                totalQuatity += lineItem.quantity
            })
        }
    return (
        <CartWrapper>
            <FaShoppingCart size='1.5em'/>
                <div>
                 {totalQuatity} Producto(s) /  {checkout?.totalPrice || '0.00'}€
                </div>
        </CartWrapper>
    )
};

