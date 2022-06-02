import React, { useEffect, useState } from 'react';
import Axios from 'axios'
import './css/Card.css'
import { useNavigate } from 'react-router-dom';
function Rocket(props) {
    const navigate=useNavigate()
    
   
    return (
        <div>
        <h1 id="heading">Rocket List</h1><br/>
        <div className="card-grid">
            {props.data.map((e) => {
                return (
                
                    


                        <div className="card card-shadow" key={e.id}>
                            <div className="card-header card-image">
                                <img src={e.flickr_images[0]} alt="rocket name"/>
                            </div>
                            <div className="card-body">
                            <h3>{e.rocket_name}</h3>
                            
                            </div>
                            <div className="card-footer">
                                <button className="btn" onClick={()=>navigate(`/rocket/${e.rocket_id}`)}>More Details</button>
                            </div>
                        </div>
                    )
            })}
            </div>
        </div>
    );
}

export default Rocket;