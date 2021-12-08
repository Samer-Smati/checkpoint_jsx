import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { FaUser } from 'react-icons/fa';
import './../style.css';
export default function NavBar() {
    return (
        <div>
            <Navbar  bg="primary" variant="dark" fixed="top"  >
            <div className="container-fluid">
                <Navbar.Brand href="#home">CheckpointJsx</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#imageInSrc">imageInSrc</Nav.Link>
                    <Nav.Link href="#imageInPublic">imageInPublic</Nav.Link>
                    <Nav.Link href="#video">video</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav.Link className="align-items-center d-flex" href="#home"><FaUser className="m-2" /> Smati Samer</Nav.Link>
                </Navbar.Text>
                </Navbar.Collapse>
            </div>
            </Navbar>
        </div>
    )
}
