import { Container } from "./style";


export function Tecnologias(props) {
    
    return(
        <Container>
            <ul>
                <li>{props.tec}</li>
            </ul>
        </Container>
    )
}
