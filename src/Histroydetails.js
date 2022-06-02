import React from 'react';
import './css/Table.css'
function Histroydetails(props) {
    return (
        <div>
            <h1 id="header">History Details</h1>
            {props.data.map((e) => {
                return (
                    <div className='container' key={Date.now()}>
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <th>Value</th>
                                </tr>
                                <tr>
                                    <td>title</td>
                                    <td>{e.title}</td>
                                </tr>
                                <tr>
                                    <td>event_date_utc</td>
                                    <td>{e.event_date_utc}</td>
                                </tr>
                                <tr>
                                    <td>event_date_unix</td>
                                    <td>{e.event_date_unix}</td>
                                </tr>
                                <tr>
                                    <td>flight_number</td>
                                    <td>{e.flight_number}</td>
                                </tr>

                                <tr>
                                    <td>details</td>
                                    <td>{e.details}</td>
                                </tr>
                                <tr>
                                    <td>article</td>
                                    <td>{e.links.article}</td>
                                </tr>
                                <tr>
                                    <td>wikipedia</td>
                                    <td>{e.links.wikipedia}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            })}
        </div>
    );
}

export default Histroydetails;