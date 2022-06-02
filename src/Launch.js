
import React from 'react';
import './css/Card.css'
import { useNavigate } from 'react-router-dom';

function Launch(props) {
        const navigate=useNavigate()
        console.log("pop",props)
    return (
        <div>
            <h1>Launch</h1>
            <div className="card-grid">
                {props.data.map((e) => {
                    return (
                        <div className="card card-shadow" key={e.flight_number}>
                            <div className="card-header card-image">
                                <img src={e.links.flickr_images[0]||e.links.mission_patch_small} alt="launch name" />
                            </div>
                            <div className="card-body">
                                <h3>{e.mission_name}</h3>
                
                            </div>
                            <div className="card-footer">
                                <button className="btn" onClick={()=>navigate(`/launch/${e.flight_number}`)}>More Details</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Launch;