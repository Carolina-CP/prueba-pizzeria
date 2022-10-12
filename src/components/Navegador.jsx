import React from 'react';
import "../assets/Navegador.css";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Navegador = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <div>
            <Navbar bg="success" >
                <Container className="d-flex justify-content-between px-5">
                    <Navbar.Brand> <Link to="/" className="text-white ms-4  text-decoration-none">
                        🍕 Pizzería Mamma Mía
                    </Link>
                     

                    </Navbar.Brand>

                    <Link to="/carrito" className="text-white ms-3 text-decoration-none">
                        🛒 Total: 
                    </Link>

                </Container>
            </Navbar>

        </div>
    )
}

export default Navegador