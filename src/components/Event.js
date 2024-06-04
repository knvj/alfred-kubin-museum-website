import React from "react";
import "./Event.css";

function Event({event}){
    return (
        <div className="row">
            <div className="col-md-7">
                <h1>{event.name}</h1>
                <p>{event.date}</p>
                <p>{event.details}</p>
                <p>{event.description}</p>
                <p className="tickets">{event.tickets}</p>
            </div>
        </div>
    )
}

export default Event