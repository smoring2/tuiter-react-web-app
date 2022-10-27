import React from "react";
import ProfileItem from "./profile-item";
import {useSelector} from "react-redux";
import "./index.css";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    return (
        <div>
            <h4>ProfileComponent</h4>
            <ProfileItem profile={profile}/>
        </div>
    );

};
export default ProfileComponent;
