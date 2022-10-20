import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import Nav from "../nav";

function Tuiter() {
    return (
        <div>
            <Nav/>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6"
                 style={{"position": "relative"}}>
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </div>

    );
}

export default Tuiter