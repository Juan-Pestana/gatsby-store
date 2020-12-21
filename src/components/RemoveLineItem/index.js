import React, {useContext} from 'react'
import CartContext from '../../context/CartContext'
import { FaTrashAlt} from 'react-icons/fa'
import {Icon} from './styles'

const RemoveLineItem = ({lineItemId}) => {

    const {removeLineItem} = useContext(CartContext)

    const handleRemove = () =>{
        removeLineItem(lineItemId)
    }

    return (
        <Icon onClick={handleRemove}>
            <FaTrashAlt />
        </Icon>
    )
}

export default RemoveLineItem
