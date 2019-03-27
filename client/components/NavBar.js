const React = require("react");
const ReactDOM = require("react-dom");

import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from "react-bootstrap";
class NavBar extends React.Component{
render(){
    return(
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Aday</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">漫行</Nav.Link>
        <Nav.Link href="#link">聚焦</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
    )};
}
// 然后我们渲染到body里
//  ReactDOM.render(NavbarInstance,document.getElementById ('app'));
 export default NavBar;
