import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Card } from 'react-bootstrap';

/*
outputs: <p>Restaurants query: query</p> where query is a value that will be available in "props"
thanks to our routing configuration (see: Step 4)

*/
function Restaurant(props) {
  const [restaurant, setRestaurant] = useState(null);
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
          console.log(restaurant);
        } else {
          
          setRestaurant(null);
        }


      })
      .catch(function (err) {
        console.log("Error found");
        console.error(err);
      })

  }, []);
  return (
    
    <Card >
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          More to come...
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Restaurant;

