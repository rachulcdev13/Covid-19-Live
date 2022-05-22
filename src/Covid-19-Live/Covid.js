import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Covid.css"

const Covid = () => {
    const [data,setData]=useState();
    console.log(data);
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json')
            // console.log(res);
            const actualData = await res.json();
            // console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
        // const res = await fetch('https://data.covid19india.org/data.json')
        // console.log(res);
    };

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
        <br /><br />
            <section className='mainbg'>
                <div className='container' style={{color:"white",fontWeight:"bold"}}> 
                    <h5 className='text-center'>🔴 LIVE</h5>
                    <h2 className='text-center'>COVID-13 CORONAVIRUS TRACKER</h2><br />

                    <div className='cardmain'> 
                        <div className="row">
                        <div className="col-sm-3">
                                <div className="card text-center bg-danger" style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                     <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> OUR </span>COUNTRY</h5>
                                        <h1 className='india'>INDIA</h1>
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-primary" style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}}>
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>RECOVERED</h5>
                                        <h1 className='india'>31441260</h1>
                                        {/* <h1 className='india'>{data.recovered}</h1> */}
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-success"  style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>CONFIRMED</h5>
                                        <h1 className='india'>32249900</h1>
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-danger" style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                     <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>DEATH</h5>
                                        <h1 className='india'>432112</h1>
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card text-center bg-warning"  style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>ACTIVE</h5>
                                        <h1 className='india'>363849</h1>
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-info" style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}}>
                                        <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>DELTA CONFIRMED</h5>
                                        <h1 className='india'>24692</h1>
                                        <p>Updated</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-warning"  style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>DELTA DEATH</h5>
                                        <h1 className='india'>438</h1>
                                        <p>Go somewhere</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center bg-success"  style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}} > 
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> LAST </span>UPDATED</h5>
                                        <h1 className='india'>13/08/2021 23:27:22</h1>
                                        {/* <p>Updated</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* <div className="row">
                            <div class="col-sm-6">
                                <div className="card text-center bg-primary"  style={{boxShadow:"0 10px 10px 0px rgba(0,0,0,0.2)"}}   style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title"><span style={{ fontSize: "10px" }}> TOTAL </span>COUNTRY</h5>
                                        <h1 className='india'>INDIA</h1>
                                        <button>Updated</button>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </section>
        </>
    )
}
export default Covid;