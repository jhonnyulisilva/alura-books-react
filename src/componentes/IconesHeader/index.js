import './style.css';
import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'

const icones = [Perfil, Sacola]

function IconesHeader() {
    return (
        <ul className='icones'>
          {icones.map((icone, index) => (
            <li key={index} className='icone'>
              <img src={icone} alt={`Ícone ${index + 1}`} />
            </li>
          ))}
        </ul>
    )
}

export default IconesHeader;