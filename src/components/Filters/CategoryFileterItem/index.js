import React from 'react'
import {CategoryFilterItemWraper} from './styles'
import CheckBox from '../../Checkbox'
import {navigate, useLocation} from '@reach/router'
import queryString from 'query-string'

const CategoryFilterItem = ({title, id}) => {

    //identificamos cual es el collectioId en la query de la barra de navegación
    const {search} = useLocation()
    const qs = queryString.parse(search)
    const collectionIds = qs.c?.split(',').filter(c=> !!c) || [];

    const checked = collectionIds?.find(cId => cId === id)

    const searchTerm = qs.s

    const onClick = () =>{
        let navigateTo = '/allProducts'


        
        let newIds = []

        if(checked){
            newIds = collectionIds
                    .filter(cId => cId !== id)
                    .map(cId => encodeURIComponent(cId))

        } else{
            collectionIds.push(id)
            newIds = collectionIds.map(cId => encodeURIComponent(cId))
        }

        if(newIds.length && !searchTerm){
            navigate(`${navigateTo}?c=${newIds.join(',')}`)
        }else if(newIds.length && searchTerm){
            navigate(`${navigateTo}?c=${newIds.join(',')}&s=${encodeURIComponent(searchTerm)}`)
        }else if(!newIds.length && searchTerm){
            navigate(`${navigateTo}?s=${encodeURIComponent(searchTerm)}`)
        }else{
            navigate(`${navigateTo}`)
        }

    //incluimos el collectionId como query en la barra de navegación
       
    }

    return (
        <CategoryFilterItemWraper onClick={onClick}>
            <CheckBox checked = {checked} />
            <div>{title}</div>
        </CategoryFilterItemWraper>
    )
}

export default CategoryFilterItem
