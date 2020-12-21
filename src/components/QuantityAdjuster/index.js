import React from 'react'
import {QuantityAdjusterWrapper, AdjusterButton} from './styles'

const QuantityAdjuster = ({item, onAdjust}) => {

    //y por que no se trajo el context aquí??? no lo entiendo


    const handleDecrementQuantity = ()=>{
        onAdjust({variantId: item.variant.id, quantity: -1})
    }

    const handleIncrementQuantity = ()=>{
        onAdjust({variantId: item.variant.id, quantity:+1})
    }

    return (
        <QuantityAdjusterWrapper>
            <AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
            <div>{item.quantity}</div>
            <AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
        </QuantityAdjusterWrapper>
    )
}

export default QuantityAdjuster
