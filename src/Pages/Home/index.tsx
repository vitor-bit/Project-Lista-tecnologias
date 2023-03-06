import { ButtonIdioma } from '../../Components/ButtonIdioma';
import { Header } from '../../Components/Header';
import { Container, Conteudo, Lista, Button } from './style';
import { Tecnologias } from '../../Components/Tecnologias';
import IconeBrazil from '../../img/icons/brazil.svg'
import IconeEua from '../../img/icons/eua.svg'
import IconeEspanhol from '../../img/icons/espanhol.svg'
import { useState } from 'react';



export function Home() {
    const tecnologias = ['JavaScrip', 'Java', 'TypeScript', 'React', 'Styled Components', 'HTML', 'CSS']

    const [linguagem, setLinguagem] = useState('Olá, meu nome é Vitor Bitencourt e eu sou um estudante de Desenvolvedor de Software, Tecnologias já estudei:');

    function mudarIdioma(idButton) {
            if (idButton === 'PtBr'){
                setLinguagem('Olá, meu nome é Vitor Bitencourt e eu sou um estudante de Desenvolvedor de Software, Tecnologias já estudei:')
            }else if (idButton === 'En'){
                setLinguagem('Hello, my name is Vitor Bitencourt and I am a Software Developer student, Technologies I have studied:')
            }else {
                setLinguagem('Hola, mi nombre es Vitor Bitencourt y soy estudiante de Desarrollo de Software, Tecnologías que he estudiado:')
            }
        }
    
    return(
        <Container>
            <Header/>
            <Conteudo>
                <h1>{linguagem}</h1>
                <Lista>
                    {
                            tecnologias.map((e, index) => <Tecnologias key={index} tec={e}/>)
                    }
                </Lista>
                <Button>
                    <ButtonIdioma idButton='PtBr' icone={IconeBrazil} linguagem={'Português'} funIdioma={mudarIdioma}/>
                    <ButtonIdioma idButton='En' icone={IconeEua} linguagem={'Inglês'} funIdioma={mudarIdioma}/>
                    <ButtonIdioma idButton='Es' icone={IconeEspanhol} linguagem={'Espanhol'} funIdioma={mudarIdioma}/>
                </Button>
            </Conteudo>
        </Container>
        
    )
}