import React from 'react';
import './css/Tab.css'

function Launchdetail(props) {
    
    return (
        <div>
        <h1>Launchdetail</h1>
            {
                props.data.map((e) => {
                    return (
                        <div className='container' key={Date.now()}>
                            <div className="tabs">
                                <input type="radio" className="tabs__radio" name="tabs-example" id="Engine" checked />
                                <label htmlFor="Engine" className="tabs__label">Launchdetails</label>
                                <div className="tabs__content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>launch_year</td>
                                                <td>{e.launch_year||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_date_unix</td>
                                                <td>{e.launch_date_unix||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_date_local</td>
                                                <td>{e.launch_date_local||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_window</td>
                                                <td>{e.launch_window||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_date_utc</td>
                                                <td>{e.launch_date_utc||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_site_id</td>
                                                <td>{e.launch_site.site_id||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>launch_site_name</td>
                                                <td>{e.launch_site.site_name||"none"}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                                <input type="radio" className="tabs__radio" name="tabs-example" id="Rocket Details" />
                                <label htmlFor="Rocket Details" className="tabs__label">MissionDetails</label>
                                <div className="tabs__content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>mission_name</td>
                                                <td>{e.mission_name||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>mission_id</td>
                                                <td>{e.mission_id[0]||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>nationality</td>
                                                <td>{e.nationality||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>flight_number</td>
                                                <td>{e.flight_number||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>manufacturer</td>
                                                <td>{e.manufacturer||"none"}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                                <input type="radio" className="tabs__radio" name="tabs-example" id="Other Details" />
                                <label htmlFor="Other Details" className="tabs__label">Other Details</label>
                                <div className="tabs__content">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>payload_type</td>
                                                <td>{e.payload_type||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>payload_mass_kg</td>
                                                <td>{e.payload_mass_kg||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>orbit</td>
                                                <td>{e.orbit||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>rocket</td>
                                                <td>{e.rocket.rocket_name||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>static_fire_date_utc</td>
                                                <td>{e.static_fire_date_utc||"none"}</td>
                                            </tr>
                                            <tr>
                                                <td>tentative_max_precision</td>
                                                <td>{e.wikipedia||"none"}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Launchdetail;