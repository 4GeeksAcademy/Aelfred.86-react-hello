import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
    return (
        <div class="p-5 mb-4 bg-light rounded-3">
            {/* <div class="container-fluid py-5"> */}
                <h1 class="display-5 fw-bold">Venezuela y sus paisajes</h1>
                <p class="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                <button class="btn btn-primary btn-lg" type="button">Explora nuestro país</button>
            {/* </div> */}
        </div>
    );
};

export default Jumbotron;






