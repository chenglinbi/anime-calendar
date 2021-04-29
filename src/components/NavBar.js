import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
const NavBar = ({setCurrentAnimeSeasonState}) => {
    const setSelectedSeason = (event, season) => {
        event.preventDefault()
        console.log("setting current season to ", season)
        setCurrentAnimeSeasonState(season)
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Anime Calendar</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="2021 Season" id="basic-nav-dropdown">
                        <NavDropdown.Item href="spring" onClick={(e) => setSelectedSeason(e, "SPRING")}>Spring</NavDropdown.Item>
                        <NavDropdown.Item href="summer" onClick={(e) => setSelectedSeason(e, "SUMMER")}>Summer</NavDropdown.Item>
                        <NavDropdown.Item href="fall" onClick={(e) => setSelectedSeason(e, "FALL")}>Fall</NavDropdown.Item>
                        <NavDropdown.Item href="winter" onClick={(e) => setSelectedSeason(e, "WINTER")}>Winter</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar