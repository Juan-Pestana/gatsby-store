import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import {CartItem, CartHeader, CartFooter, Footer} from './styles'
import QuantityAdjuster from '../../components/QuantityAdjuster'
import RemoveLineItem from '../RemoveLineItem'
import {Button} from '../Button'
import { navigate } from '@reach/router'


export default function CartContents(){

    const {checkout, updateLineItem} = useContext(CartContext)

    const handleAdjustQuantity = ({quantity, variantId}) =>{
        updateLineItem({quantity, variantId})
    }

    return (
        <section>
            <h1>
                Your cart
            </h1>
            {!!checkout?.lineItems && 
            <CartHeader>
                <div>Product</div>
                <div>Unit Price</div>
                <div>Quantity</div>
                <div>Amount</div>
            </CartHeader> }
            {!checkout?.lineItems && <h4>No hay productos</h4>}
            {checkout?.lineItems?.map(lineItem => <CartItem key ={lineItem.variant.id}>
                <div>
                    <div>
                        {lineItem.title}
                    </div>
                    <div>
                        {lineItem.variant.title === 'Default Title' ? '' : lineItem.variant.title}
                    </div>
                </div>
                <div>
                    {lineItem.variant.price}
                </div>
                <div>
                    <QuantityAdjuster item = {lineItem} onAdjust= {handleAdjustQuantity}></QuantityAdjuster>
                </div>
                <div>
                    {(lineItem.quantity * lineItem.variant.price).toFixed(2)} €
                </div>
                <div>
                    <RemoveLineItem lineItemId = {lineItem.id}/>
                </div>
                </CartItem>)}
                {!!checkout?.lineItems && 
                <CartFooter>
                    <div><strong>Total:</strong></div>
                    <div>
                        <span> {checkout?.totalPrice} €</span>
                    </div>
                </CartFooter>}
                <Footer>
                    <div><Button onClick={()=> navigate(-1)}>Sigue Comprando</Button></div>
                    <div>
                        {!!checkout?.webUrl && <Button onClick= {()=>
                        window.location.href = checkout.webUrl
                    }>Tramitar Pedido</Button>}
                        
                    </div>
                </Footer>
        </section>
    )
}

