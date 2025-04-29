import './style.css';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
          {textoOpcoes.map((texto, index) => (
            <li key={index} className='opcao'>
              {texto}
            </li>
          ))}
        </ul>
    )
}

export default OpcoesHeader;