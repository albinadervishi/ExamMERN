import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PirateForm= (props) => {
    const {pirate, setPirate, update, setUpdate} = props;
    const [errors,setErrors] = useState([])
    const [firstName, setFirstName] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [phrase, setPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [treasures, setTreasures] = useState();
    const [pegleg, setPegleg] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [hookhand, setHookhand] = useState(true);
    const navigate=useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            firstName,    
            imgURL,
            phrase,
            position,
            treasures,
            pegleg,
            eyepatch,
            hookhand      
        })
            .then(res=>{
                console.log(res.data.errors);
                if (res.data.errors) {
                    setErrors(res.data.errors);
                }
                else{
                setUpdate(!update);
                console.log("sapo nisa nje request tek server")
                navigate("/");
                }
        })
        .catch(err=>{
            console.log("erorrTEst:"+ JSON.stringify(err))
        })
            setFirstName("");
            setImgURL("");
            setPosition("");
            setPhrase("");
            setTreasures(0);
            setPegleg(true);
            setEyepatch(true);
            setHookhand(true);
    }

    const goToCrew = () => {
        navigate(`/`);
      };

    return (
      <div class=" bg-warning text-dark" style={{height: "100vh" }}>
        <div class=" d-flex justify-content-around align-items-center  bg-dark text-white " style={{ width: "100%", height: "100px" }}>
        <h2>Add a new pirate</h2> 
        <button class="btn btn-primary" onClick={goToCrew}>Crew Board</button>
        </div>
        <form className='form' onSubmit={onSubmitHandler}>
        <img width='200px' height='200px' src={imgURL} ></img>
          <div>
            <div class="form-group">
              <label>Pirate Name:</label>
              <input
                type="text"
                class="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName ? (
                <p className="text-danger">{errors.firstName.message}</p>
              ) : (
                ""
              )}
            </div>
            <div class="form-group">
              <label>Image Url:</label>
              <input
                type="text"
                class="form-control"
                value={imgURL}
                onChange={(e) => setImgURL(e.target.value)}
              />
              {errors.imgURL ? (
                <p className="text-danger">{errors.imgURL.message}</p>
              ) : (
                ""
              )}
            </div>

            <div class="form-group">
              <label># of Treasures Chests:</label>
              <input
                type="number"
                class="form-control"
                value={treasures}
                onChange={(e) => setTreasures(e.target.value)}
              />
              {errors.treasures ? (
                <p className="text-danger">{errors.treasures.message}</p>
              ) : (
                ""
              )}
            </div>

            <div class="form-group">
              <label>Pirate Catch Phases:</label>
              <input
                type="text"
                class="form-control"
                value={phrase}
                onChange={(e) => setPhrase(e.target.value)}
              />
              {errors.phrase ? (
                <p className="text-danger">{errors.phrase.message}</p>
              ) : (
                ""
              )}
            </div>
          </div>


          <div>
            <div class="form-group">
              <label>Crew Position</label>
              <br />
              <select onChange={(e) => setPosition(e.target.value)}>
                <option value={"0"}>Select Position</option>
                <option value={"Captain"}>Captain</option>
                <option value={"First Mate"}>First Mate</option>
                <option value={"Quarter Master"}>Quarter Master</option>
                <option value={"Boatswain"}>Boatswain</option>
                <option value={"Powder Monkey"}>Powder Monkey</option>
              </select>
              {errors.position ? (
                <p className="text-danger">{errors.position.message}</p>
              ) : (
                ""
              )}
            </div>
            <div class="form-group">
              <label>Peg Leg</label>
              <br />
              <input type="checkbox" checked={pegleg} onChange={(e) => setPegleg(!pegleg)} />
            </div>
            <div class="form-group">
              <label>Eye Patch</label>
              <br />
              <input type="checkbox" checked={eyepatch} onChange={(e) => setEyepatch(!eyepatch)} />
            </div>
            <div class="form-group">
              <label>Hook Hand</label>
              <br />
              <input type="checkbox" checked ={hookhand} onChange={(e) => setHookhand(!hookhand)} />
            </div>
            <button type="submit" class="btn btn-primary">
              Add Pirate
            </button>
          </div>
        </form>
      </div>
    );

}
export default PirateForm;

