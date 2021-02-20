import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Card, CardGroup } from 'react-bootstrap';

function Restaurant(props) {
  const [restaurant, setRestaurant] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    
    fetch(`https://infinite-castle-65545.herokuapp.com/api/restaurants/${props.id}`)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setLoading(false);
        if (data.hasOwnProperty("_id")) {
          setRestaurant(data);
        } else {
          setRestaurant(null);
        }
      })
      .catch(function (err) {
        console.log("Error found");
        console.error(err);
      })

  }, []);

  if (!restaurant && loading == false) {
    return (
      <>
      <br />
      <Card >
        <Card.Header>Error</Card.Header>
        <Card.Body>
        <Card.Text> Unable to find Restaurant with id: {props.id} </Card.Text>
        </Card.Body>
        </Card>
      </>
    )
  } else if (!restaurant && loading== true){
    return (
      <>
      <Card >
        <Card.Header>Loading</Card.Header>
        <Card.Body>
        <Card.Text> Loading Restaurant Data </Card.Text>
        </Card.Body>
        </Card>
      </>
    )
  } 
  else {
    const position = [restaurant.address.coord[1], restaurant.address.coord[0]];
    return (
      <>
        <Card >

          <Card.Body>
            <Card.Title>{restaurant.name}</Card.Title>
            <Card.Text>
              {restaurant.address.building} {restaurant.address.street}
            </Card.Text>
          </Card.Body>

        </Card>
        <br />
        <MapContainer style={{ "height": "400px" }} center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
          </Marker>
        </MapContainer>
        <br />
        <h2>Ratings</h2>
        <br />
        <CardGroup>
        
          {restaurant.grades.map((field)=>
            <Card>
              <Card.Header>Grade: {field.grade}</Card.Header>
            <Card.Body>
              
              <Card.Text>
                Completed: {(field.date).substring(0,10)}
              </Card.Text>
            </Card.Body>
            
          </Card>
            )}
          
         
        </CardGroup>
      </>
    );
  }
}


export default Restaurant;

