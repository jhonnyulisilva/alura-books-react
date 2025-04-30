import Perfil from '../../imagens/perfil.svg'
import Sacola from '../../imagens/sacola.svg'
import styled from 'styled-components';

const Icones = styled.ul`
  display: flex;
  align-items: center;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`
const icones = [Perfil, Sacola]

function IconesHeader() {
    return (
        <Icones>
          {icones.map((icone, index) => (
            <Icone key={index}>
              <img src={icone} alt={`Ícone ${index + 1}`} />
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;