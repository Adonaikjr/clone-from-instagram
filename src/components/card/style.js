import styled from 'styled-components'

export const Container = styled.div`
    width:21rem;
    height: 19rem;
    border:solid ;
    span >img{
        border-radius: 100%;
    }
    button{
        width: 200px;
        height:30px;
        border-radius: 10px;
        border: transparent;
        background: blue;
        >a{
            color:white;
        }
    }
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`