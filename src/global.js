import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        margin: 0 auto;
        padding: 0 auto;
        font-family: sans-serif;
        font-size: 16px;
        a{
            text-decoration: none;
            color:#0095f6;
        }
    }
`