import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';


const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
      
    <div>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web:300,400,700" rel="stylesheet"></link>
      <Navbar light expand="md" style={{zIndex:"10",padding:"1%", background:"#abff3d",position:"fixed",width:"100%"}}>
        <NavbarBrand style={{color:"#2f4858", fontFamily:"'Titillium Web', sans-serif", fontSize:"24px", marginLeft:"15px"}} href="/">Aksara</NavbarBrand>
        <NavbarToggler onClick={toggle} style={{marginLeft:"80%",position:"absolute"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink style={{color:"#2f4858", fontFamily:"'Titillium Web', sans-serif", fontSize:"18px", marginLeft:"15px",}} href="/">Beranda</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#2f4858", fontFamily:"'Titillium Web', sans-serif", fontSize:"18px", marginLeft:"15px"}} href="/">Harga Pasar</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#2f4858", fontFamily:"'Titillium Web', sans-serif", fontSize:"18px", marginLeft:"15px"}} href="/">Cara Berbelanja</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{color:"#2f4858", fontFamily:"'Titillium Web', sans-serif", fontSize:"18px", marginLeft:"15px"}} href="/">Menjadi Mitra</NavLink>
            </NavItem>
          </Nav>
            <div style={{marginTop:"5px", marginLeft:"15px"}}>
            <Button hover className="masuk" style={{marginRight:"10px", background:"#2f4858", borderColor:"transparent"}}>Masuk</Button>
            <Button hover className="daftar" style={{background:"#006789", borderColor:"transparent"}}>Daftar Sebagai Mitra</Button>
            </div>                
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

