import React, {useState, useEffect} from 'react';
import { Card, Table } from 'react-bootstrap';


function Restaurants(props) {
  const perPage = 10;
  const [restaurants, setRestaurants] = useState(null);
  const [page, setPage] = useState(1);
  let test;
  //M<ust include borough in future using props.query. use the "query-string" module 
  //https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}borough=${props.query.borough}

  const previousPage = (prev) => {
    if (page > 1){
    setPage(prev => prev - 1);
    }
  };


  function nextPage(){
    setPage(page++);
  }

  function getResults(){
    //fetch(`https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`)
    fetch(`
    https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}
    `)
  .then(function(res) {
      return res.json();
  })
  .then(function(obj) {
     
      setRestaurants(obj);
      test =  Object.keys(obj).map(function(key) { return obj[key] });
      

  })
  .catch(function(err) {
      console.error(err);
  })
  }
  useEffect(()=>{
    getResults();
    //let asd =  Object.keys(restaurants).map(function(key) { return restaurants[key] });
    //console.log(restaurants);

    
  }, []);
  
  console.log(restaurants);
  /*let parsedRestaurantsData =  Object.keys(restaurants).map(function(key) { return restaurants[key] })
  /*parsedRestaurantsData.map((user) =>{
    console.log(user.name);
  });*/
  
  return (
    
   <>
    <p>Restaurants query {props.query}</p>
    <Card >
      <Card.Body>
        <Card.Title>Restaurant List</Card.Title>
        <Card.Text>
          Full list of restaurants. Optionally sorted by borough
        </Card.Text>
      </Card.Body>
    </Card>
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Borough</th>
      <th>Cuisine</th>
    </tr>
  </thead>
  <tbody>
  {/*test.map((user) => 
                        <tr >
                            <td>{user.name}</td>
                            <td>{user.address.building} {user.address.street}</td>
                            <td>{user.borough}</td>
                            <td>{user.cuisine}</td>
                        </tr>
                    )*/
                    }
  
    
  </tbody>
</Table>
    </>
  );
  
}
/*
{
   
   test.map((user) => 
                        <tr >
                            <td>{user.name}</td>
                            <td>{(user.active) ? "yes" : "no"}</td>
                            <td>{user.age}</td>
                        </tr>
                    )
                    }
*/
/*
<tr>
      <td></td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      */
  




export default Restaurants;