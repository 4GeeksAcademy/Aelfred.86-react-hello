import React from "react";


//create your first component
const Card = (props) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={props.img} className="card-img-top h-50" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                    
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className="btn btn-primary">Visitanos!</a>
                    </div>
            </div>
        </>
    );
};

export default Card;




