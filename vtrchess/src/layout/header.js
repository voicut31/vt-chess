import React from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Row>
        <Col  xs={8}>
          <h1>VTChess</h1>
        </Col>
        <Col  xs={2}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Games
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Play with a friend</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Play with computer</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={2}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Sign Up</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Col>
      </Row>
    </header>
  )
}

export default Header;
