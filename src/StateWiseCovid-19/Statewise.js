import React, { useEffect, useState } from "react";
import "./Statewise.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Statewise = () => {
    const [data, setData] = useState([]);

    const getStateWisedata = async () => {

        // try {
        //     const res = await fetch('https://data.covid19india.org/data.json')
        //     const actualData = await res.json();
        //     console.log(actualData.statewise);

        // } catch (error) {
        //     console.log(error);
        // }

        const res = await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getStateWisedata();
    }, []);

    return (
        <><br />
            <div className="bg-warnin">
                <h5 className='text-center'>🔴 LIVE</h5>
                <h3 className='text-center'>STATE WISE DATA COVID-19 CORONAVIRUS</h3>
                <div className="container-fluid mt-5">
                    {/* <div className="main_heading">
                    <h1 className="mb-5"><span className="font-weight-bold">INDIA</span>COVID-19 DASHBOARD</h1> 
                </div> */}
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-dark fixed">
                                <tr>
                                    <th>State</th>
                                    <th>Confirmed</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                    {/* <th>Delta Confirmed</th> */}
                                    {/* <th>Delta Recovered</th> */}
                                    <th>Delta Deaths</th>
                                    <th>Active</th>
                                    <th>last Updated</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    data.map((curr, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{curr.state}</td>
                                                <td>{curr.confirmed}</td>
                                                <td>{curr.recovered}</td>
                                                <td>{curr.deaths}</td>
                                                <td>{curr.deltadeaths}</td>
                                                <td>{curr.active}</td>
                                                <td>{curr.lastupdatedtime}</td>

                                                {/* <td>{curr.deltaconfirmed}</td> */}
                                                {/* <td>Delta Recovered</td> */}
                                            </tr>
                                        )
                                    })
                                } 
                            </tbody>
                        </table> 
                    </div> 
                </div>
            </div>
        </>
    )
}
export default Statewise;