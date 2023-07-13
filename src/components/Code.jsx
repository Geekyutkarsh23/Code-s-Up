import { useContext } from "react";
import {DataContext} from '../Context/DataProvider';
import { Box,styled } from "@mui/material";
import Editor from "./Editor";

const Container = styled(Box)`
display:flex;
background-color:#060606;
height:59vh;
`

const Code =() => {
    const{html,setHtml,css,setCss,js,setJs} =useContext(DataContext);
    return(
<Container>
<Editor
heading ="HTML"
icon="/"
color= "#FF3C41"
value={html}
onchange={setHtml}
/>
<Editor
heading ="CSS"
icon="*"
color= "#0EBEFF"

value={css}
onchange={setCss}

/>
<Editor
heading ="Javascript"
icon="()"
color= "#FCD000"
value={js}
onchange={setJs}

/>

</Container>
    )
    }


export default Code;