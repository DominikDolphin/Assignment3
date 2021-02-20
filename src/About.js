import React from 'react';
import { Card } from 'react-bootstrap';


/*
Place information that you wish to share about interesting projects you have completed / working on, your
academic career, development interests, etc.
*/

function About(props) {
  return (
    <Card >
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          All about me - the developer. 
          <br />
          My name is Dominik Thibaudeau and I am currently studying Computer Programming at Seneca College in Toronto, Ontario.
          <br />
          At Seneca I have learned a few programming/scripting languages such as C, C++, Java and Javascript.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}



export default About;