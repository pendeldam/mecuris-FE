import React, { Fragment } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
} from 'reactstrap';

function AppNavbar() {
    return (
        <Fragment>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand>Models List</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">
                                Catalog
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default AppNavbar;
