import React from "react";
import "./index.css";
import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <h4>Home</h4>
            <div className="list-group">
                <WhatsHappening/>
                <TuitList/>
            </div>
        </div>
    );

};
export default HomeComponent;
