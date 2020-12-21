import styled from 'styled-components'
import {StyledLink} from '../StyledLink'


export const CartWrapper = styled(StyledLink).attrs(()=>({
    to: '/cart',
}))`

    margin-left: auto;
    display: flex;
    text-decoration: none;
    color: black;

    > div:last-child{
        padding-left: 8px;
        margin: auto 0;
        

    }

    &:hover{
        text-decoration: underline
    }

`;