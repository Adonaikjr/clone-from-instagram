import { Container } from "./style";
import Store from '../../img/apple-button.png';
import Play from '../../img/googleplay-button.png';

export function Baixe (){
    return(
        <Container>
            <h4>Baixe o aplicativo</h4>
            <div>
            <button>
                <a href="https://apps.apple.com/br/app/instagram/id389801252"> <img src={Store} width={200}/></a>
            </button> 
            <button>
                <a href="https://play.google.com/store/apps/details?id=com.instagram.android&hl=pt_BR&gl=US"><img src={Play} width={200}/></a>
            </button>
            </div>
        </Container>
    )
}