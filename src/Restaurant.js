import React from 'react';


/*
outputs: <p>Restaurants query: query</p> where query is a value that will be available in "props"
thanks to our routing configuration (see: Step 4)

*/
function Restaurant(props) {
    return (
        <p>Restaurant id: {props.id}</p>
    );
  }

export default Restaurant;