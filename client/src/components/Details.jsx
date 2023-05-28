import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const [pirate, setPirate] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setPirate(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);


  return (
    <div class=" bg-warning text-dark" style={{ width: "100%", height: "100%" }}>
      <div class=" d-flex justify-content-around align-items-center  bg-dark text-white " style={{ width: "100%", height: "100px" }}>
        <h2>{pirate.firstName}</h2>
        <br />
      </div>

        <div class="d-flex justify-content-around align-items-center ">
            <div>
            <img width="250px" height="250px" src={pirate.imgURL} alt="Profile" />
            <h2>"{pirate.phrase}"</h2>
            </div>
       <div>
       <h2>About</h2>
      <p>Position: {pirate.position}</p>
      <p>Treasures: {pirate.treasures}</p>
      <p>
        <label htmlFor="pegleg">Peg Leg: {pirate.pegleg ? 'Yes' : 'No'}</label>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <button style={{ backgroundColor: pirate.pegleg ? 'green' : 'red' }}>
    {pirate.pegleg ? 'Yes' : 'No'}
  </button>
      </p>
      <p>
        <label htmlFor="eyepatch">Eye Patch: {pirate.eyepatch ? 'Yes' : 'No'}</label>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <button style={{ backgroundColor: pirate.eyepatch ? 'green' : 'red' }}>
    {pirate.eyepatch ? 'Yes' : 'No'}
  </button>
      </p>
      <p>
        <label htmlFor="hookhand">Hook Hand: {pirate.hookhand ? 'Yes' : 'No'}</label>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <button style={{ backgroundColor: pirate.hookhand ? 'green' : 'red' }}>
    {pirate.hookhand ? 'Yes' : 'No'}
  </button>
      </p>
       </div>
     
        </div>
        
    </div>
  );
};

export default Details;
