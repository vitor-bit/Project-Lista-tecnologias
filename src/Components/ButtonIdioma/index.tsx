import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';
import { Container, Conteudo} from './style';

export function ButtonIdioma(props) {
    function pushIdioma(idButton){
        props.funIdioma(idButton)

    }
    return(
        <Container>
            <Conteudo>
                <button onClick={() => pushIdioma(props.idButton)}>
                    <img src={props.icone}/>
                    {props.linguagem}
                </button>
            </Conteudo>
        </Container>
    )
}