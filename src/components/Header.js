
import { Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AddCar from "./AddCar";


function Header (props) {

    return(
        <Navbar bg="dark" variant="dark" >
                <Nav className="mr-auto">
                <NavLink to="/active-cars">Машины на ТО</NavLink>
                <NavLink to="/done-cars">Машины, завершившие ТО</NavLink>
                <AddCar handleAddCar={props.handleAddCar}/>
                </Nav>
        </Navbar>
    )
}

export default Header;