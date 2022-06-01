import { Container } from './style.js'
import Logo from '../../img/instagram-logo.png'
import Perfil from '../../img/perfil-instagram.jpg'

export function Card () {
    return (
        <Container>
            <img src={Logo} alt='logo' />
            <span>
                <img src={Perfil} alt='perfil' width={110} />
            </span>
            <p>
                <button type='submit'>
                    <a href='####'>Continue com @qualfoijapa_</a>
                </button>
            </p>
            <p>
                <a href='########'>Remover Conta</a>
            </p>
        </Container>
    )
};