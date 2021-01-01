import React, {useState} from 'react'
import {navigate, useLocation} from '@reach/router'
import queryString from 'query-string'

import {Input} from '../Input'
import {Button} from '../Button'
import {FaSearch} from 'react-icons/fa'
import {SearchForm} from './styles'

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const {search} = useLocation();
    const c = queryString.parse(search)?.c || '';

    const handleSubmit = e =>{
        e.preventDefault()

        if(c){
            navigate(`/allProducts?s=${encodeURIComponent(searchTerm)}&c=${encodeURIComponent(c)}`)
        } else{
            navigate(`/allProducts?s=${encodeURIComponent(searchTerm)}`)
        }

        

    }


    return (
        <SearchForm onSubmit={handleSubmit}>
            <Input value={searchTerm} onChange={e =>setSearchTerm(e.currentTarget.value)} placeholder='Buscar'/>
            <Button>
                <FaSearch/>
            </Button>
        </SearchForm>
    )
}

export default Search
