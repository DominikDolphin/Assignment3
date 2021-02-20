import React, { Component, useEffect, useState, setState } from 'react';
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
  
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({value: event});
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('Searched Borough: ' + this.state.value);
    
  }
 
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
            <Form onSubmit={(e) => {this.handleSubmit(e)}} inline>
              <FormControl type="text" placeholder="Borough" className="mr-sm-2" value={this.state.value}
                 onChange={(e) => {this.handleChange(e.target.value)}} />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
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

export default App;