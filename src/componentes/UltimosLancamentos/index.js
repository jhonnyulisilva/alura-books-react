import { Livros } from './dadosUltimosLancamentos'
import styled from 'styled-components'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
        <Titulo cor="#EB9B00" tamanhoFonte="36px">ÚLTIMOS LANÇAMENTOS</Titulo>
        <NovosLivrosContainer>
            {Livros.map(livro => (
            <div key={livro.id}>
                <img src={livro.src} alt={livro.alt} />
                <p>{livro.nome}</p>
            </div>
        ))}
        </NovosLivrosContainer>
        <CardRecomenda 
            titulo={"RECOMENDAÇÕES DO MÊS"}
            subtitulo={"Angular 11"}
            descricao={"Construindo aplicações com Angular 11"}
            imagem={imagemLivro}
        />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;