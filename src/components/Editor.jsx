import { Box, styled } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useState } from "react";



const Heading = styled(Box)`
  background: #1d1e22;
  displayimport   padiing: 9px 12px;
`;

const Header = styled(Box)`
display:flex;
background: #060606;
color:#AAAEBC;
justify-content:space-between;
font-weight:700;
`
const Container = styled(Box)`
flex-grow: 1;
flex-basix: 0;
display:flex;
flex-direction:column;
padding:0 8px 8px;
`
const Editor = ({heading,icon,color,value,onchange}) => {
  const[open,setOpen] = useState(true);
  const handleChange = (editor,data,value) => {
onchange(value);
  }
  return (
    <Container style={open ? null: {flexGrow:0}}>
      <Header>
        <Heading>
          <Box
            components="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: "flex",
              placeContent: "center",
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
              color: "#000",
            }}
          >{icon}</Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
        fontSize="small"
        style={{alignSelf:'center'}}
        onClick={() => setOpen(prevstate=>!prevstate)}
        />
      </Header>
      <ControlledEditor
      className="ControlledEditor"
      value={value}
      onBeforeChange={handleChange}
      options={{
        theme: 'material',
    lineNumbers: true
      }}
      />
    </Container>
  );
};

export default Editor;
