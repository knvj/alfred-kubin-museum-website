import React, {useState, useEffect} from 'react';
import Event from "./Event";
import axios from 'axios';
function PlanYourVisitRoute() {


const [events, setevents] = useState([])
const [loading, setloading] = useState()
const [error, seterror] = useState()
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                setloading(true);
                const response = await axios.get('/api/events/getallevents');
                setevents(response.data);
                setloading(false);
            } catch (error) {
                seterror(true);
                console.error(error);
                setloading(false);
            }
        };

        fetchEvents();
    }, []);



    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                {loading ? (
                        <h1>Loading....</h1>
                    ) : error ? (
                        <h1>Error</h1>
                    ) : (
                        events.map((event) => {
                    return <div className="col-md-9">
                        <Event event={event}/>
                    </div>
                })
                )}
            </div>
        </div>
    );
};

export default PlanYourVisitRoute