import React, { useState, useEffect } from 'react';
import { Card, Table, Pagination } from 'react-bootstrap';


function Restaurants(props) {
  const perPage = 10;
  const [restaurants, setRestaurants] = useState([]);
  const [page, setPage] = useState(1);
  //M<ust include borough in future using props.query. use the "query-string" module 
  //https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}borough=${props.query.borough}

  function previousPage()  {
    if (page > 1) {
      setPage(page - 1);
      getResults();
    }
  };

  function nextPage() {
    setPage(page + 1);
    getResults();
  }

  function getResults() {
    //fetch(`https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}`)
    fetch(`
    https://infinite-castle-65545.herokuapp.com/api/restaurants?page=${page}&perPage=${perPage}
    `)
      .then(function (res) {
        return res.json();
      })
      .then(function (obj) {
        console.log(obj);
        setRestaurants(obj)

      })
      .catch(function (err) {
        console.log("Error found");
        console.error(err);
      })

  }

  useEffect(() => {
    getResults();
    
  }, []);
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
          {restaurants.map((user, index) =>
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.address.building} {user.address.street}</td>
              <td>{user.borough}</td>
              <td>{user.cuisine}</td>
            </tr>
          )
          }
  
  
        </tbody>
      </Table>
     
      <Pagination>
      <Pagination.Prev onClick={(e) => { previousPage() }}/>
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={(e) => { nextPage() }}/>
      </Pagination>
    </>
  );
}

export default Restaurants;