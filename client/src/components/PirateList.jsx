import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const PirateList = (props) => {
    const {setPirate, pirate ,update} = props;

    useEffect(()=>{
    	axios.get("http://localhost:8000/api/users")
    	.then((res)=>{
            const sortedData = res.data.pirates.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        setPirate(sortedData);
        console.log(res.data.pirates)
        setPirate(res.data.pirates)
      })
    	.catch((err)=>{
            console.log(err);
    	})

    }, [update])

    const deletePirate = (pirateId) => {
        axios.delete('http://localhost:8000/api/users/' + pirateId)
            .then(res => {
                setPirate(pirate.filter(pirate => pirate._id != pirateId)); 
            })
            .catch(err => console.log(err))
    }

    return (
      <div class=" bg-warning text-dark" style={{width:'100%', height: '100%'}}>
        <div class=" d-flex justify-content-around align-items-center  bg-dark text-white " style={{width:'100%', height: '100px'}}>
        <h2 >Pirate Crew</h2>
        <Link to={"/pirates/new"}><p class=" btn p-3 mb-2 bg-primary text-white">Add Pirate</p></Link>
        <br/>
        </div>
        
        <table class="table " style={{ marginTop: '20px'}}>
          <tbody>
            {
                pirate.map((pirate, index)=>{
                    if (pirate.position === "Captain"){
                        return (
                            <tr >
                                <div class="d-flex justify-content-between p-3 mb-2 bg-light text-dark border border-dark" style={{width:'75%', height: '150px', marginLeft: '10%'}}>
                                <td class="d-flex justify-content-between"><img width='100px' height='100px' src={pirate.imgURL} ></img>&nbsp; &nbsp;<h4 key={index+1}>{pirate.firstName} </h4>&nbsp; | &nbsp;<h4 >Captain</h4></td>
                            <td><Link to={"/pirates/" + pirate._id }><button class="btn btn-primary">View Pirate</button></Link> <button class="btn btn-danger" onClick={() => deletePirate(pirate._id)}>Walk The Plank</button></td></div>
                            
                          </tr>
                        )
                    }
                    else{
                        return (
                            <tr  >
                            <div class="d-flex justify-content-between p-3 mb-2 bg-light text-dark border border-dark" style={{width:'75%', height: '150px', marginLeft: '10%'}}>
                            <td class="d-flex justify-content-between"><img width='100px' height='100px' src={pirate.imgURL} ></img>&nbsp; &nbsp;<h4 key={index+1}>{pirate.firstName} </h4></td>
                            <td><Link to={"/pirates/" + pirate._id }><button class="btn btn-primary">View Pirate</button></Link> <button class="btn btn-danger" onClick={() => deletePirate(pirate._id)}>Walk The Plank</button></td>
                            </div>
                           
                          </tr>
                        )
                    }
                })
            }
          </tbody>
        </table>
      </div>
    );
}

export default PirateList;