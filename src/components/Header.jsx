import logo from '../assests/Logo.png'
import {AppBar, Toolbar,styled} from '@mui/material';
const Container = styled(AppBar)`
background: #060606;
height:9vh;
`
const Header = () => {
    return(
<Container position='static'> 
    <Toolbar >
       <img src={logo} alt="logo" style={{width: 50}} />
    </Toolbar>
</Container>
    )
}
export default Header;