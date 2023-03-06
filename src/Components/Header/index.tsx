import { Container, Conteudo, Imagem } from './style';
import Logosvg from '../../img/icons/indev.svg'

export function Header() {
    return(
        <Container>
            <Conteudo>
                <Imagem>
                    <img src={Logosvg}/>
                </Imagem>
            </Conteudo>
        </Container>
        
    )
}