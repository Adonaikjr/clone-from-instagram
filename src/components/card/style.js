import styled from 'styled-components'

export const Container = styled.div`
    width:30rem;
    height: 30rem;
    border:solid 1px whitesmoke;
    img{
        margin-top: 14px;
    }
    span >img{
        border-radius: 100%;

    }
    button{
        width: 200px;
        height:40px;
        border-radius: 6px;
        border: transparent;
        background: #0095f6;
        
        >a{
            color:white;
        }
    }
    display: flex;
    flex-direction:column;
    justify-content: space-around;
    align-items: center;
`