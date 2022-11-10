import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar
    from "./navigation-sidebar";
import WhoToFollowList
    from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer
    from "./reducers/who-reducer";
import postReducer from "./reducers/posts-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer"
import {configureStore}
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfileComponent from "./profile/edit-profile-component";

const store = configureStore(
    {reducer: {who: whoReducer, posts: postReducer, tuitsData: tuitsReducer, profile: profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
            <div>
                <div className="row mt-2">
                    <div className="col-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                        <NavigationSidebar active="home"/>
                    </div>
                    <div className="col-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6"
                         style={{"position": "relative"}}>
                        <Routes>
                            <Route index element={<HomeComponent/>}/>
                            <Route path="home" element={<HomeComponent/>}/>
                            <Route path="explore" element={<ExploreComponent/>}/>
                            <Route path="profile" element={<ProfileComponent/>} />
                            <Route path="edit-profile" element={<EditProfileComponent/>}/>
                        </Routes>
                    </div>
                    <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter