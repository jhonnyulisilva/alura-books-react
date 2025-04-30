import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const AppContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <AppContainer>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </AppContainer>
    )
}

export default Header;