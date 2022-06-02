import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

function History(props) {
    const navigate = useNavigate();
    return (
        <div>
        <h1>HistoryDetails</h1>

            <div className="card-grid">
                {props.data.map((e) => {
                    return (
                        <div className="card card-shadow" key={e.id}>
                            <div className="card-header card-image">
                                <img src="./image/Falcon_1_Flight_4_liftoff.jpg" alt="launch name" />
                            </div>
                            <div className="card-body">
                                <h3>{e.title}</h3>
                            </div>
                            <div className="card-footer">
                                <button className="btn" onClick={() => navigate(`/history/${e.id}`)}>More Details</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default History;