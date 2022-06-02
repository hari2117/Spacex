import React from 'react';
import './css/Tab.css'

function Rocketdetail(props) {
    return (
        <div>
            {
                props.data.map((e) => {
                    return (
                        <div className='container'>
                        <div className="tabs">
                            <input type="radio" className="tabs__radio" name="tabs-example" id="Engine" checked />
                            <label htmlFor="Engine" className="tabs__label">Engine</label>
                            <div className="tabs__content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Number</td>
                                            <td>{e.engines.number||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td>{e.engines.type||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Version</td>
                                            <td>{e.engines.version||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>propellant_1</td>
                                            <td>{e.engines.propellant_1||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>propellant_2</td>
                                            <td>{e.engines.propellant_2||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>thrust_to_weight</td>
                                            <td>{e.engines.thrust_to_weight||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>layout</td>
                                            <td>{e.engines.layout||"none"}</td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                            <input type="radio" className="tabs__radio" name="tabs-example" id="Rocket Details" />
                            <label htmlFor="Rocket Details" className="tabs__label">Rocket Details</label>
                            <div className="tabs__content">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Company_Name</td>
                                            <td>{e.company||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Rocket_id</td>
                                            <td>{e.rocket_id||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Rocket_Name</td>
                                            <td>{e.rocket_name||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Rocket_type</td>
                                            <td>{e.rocket_type||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>propellant_1</td>
                                            <td>{e.engines.propellant_1||"none"}</td>
                                        </tr>
                                        <tr>
                                            <td>Cost_per_Launch</td>
                                            <td>{e.cost_per_launch||"none"}</td>
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
                                            <td>Country</td>
                                            <td>{e.country}</td>
                                        </tr>
                                        <tr>
                                            <td>Diameter</td>
                                            <td>{e.diameter.meters}m</td>
                                        </tr>
                                        <tr>
                                            <td>success_rate_pct</td>
                                            <td>{e.success_rate_pct}</td>
                                        </tr>
                                        <tr>
                                            <td>first_flight</td>
                                            <td>{e.first_flight}</td>
                                        </tr>
                                        <tr>
                                            <td>Stages</td>
                                            <td>{e.stages}</td>
                                        </tr>
                                        <tr>
                                            <td>Article</td>
                                            <td>{e.wikipedia}</td>
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

export default Rocketdetail;