import React, { Component, useEffect, useState } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';

//Routing Components
import About from './About';
import Restaurants from './Restaurants';
import NotFound from './NotFound';
import Restaurant from './Restaurant';

class App extends Component {


  

  
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>New York Restaurants</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/restaurants">
                <Nav.Link>Full List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              <Switch>
                <Route exact path='/' render={() => (
                  <Restaurants />
                )} />
                <Route exact path='/about' render={() => (
                  <About />
                )} />

                <Route exact path='/restaurants' render={() => (
                  <Restaurants />
                )} />
                <Route exact path='/restaurant/:id' render={(props) => (
                  <Restaurant id={props.match.params.id}/>
                )} />
                <Route render={() => (
                  <NotFound />
                )} />
              </Switch>
            </Col>
          </Row>
        </Container>
        <br />
      </>
    );
  }
}
/*
<Form onSubmit={handleSubmit} inline>
              <FormControl type="text" placeholder="Borough" className="mr-sm-2" value={searchString}
                onChange={(e) => setSearchString(e.target.value)} />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
*/

export default App;