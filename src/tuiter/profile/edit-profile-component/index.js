import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile-reducer";
import {Link} from "react-router-dom";
import {BirthToDateConvert} from "../index"

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    var currProfile = {
        'firstName': profile.firstName,
        'lastName': profile.lastName,
        'handle': profile.handle,
        'profilePicture': profile.profilePicture,
        'bannerPicture': profile.bannerPicture,
        'bio': profile.bio,
        'website': profile.website,
        'location': profile.location,
        'dateOfBirth': profile.dateOfBirth,
        'dateJoined': profile.dateJoined,
        'followingCount': profile.followingCount,
        'followersCount': profile.followersCount
    };

    const updateProfileDispatch = useDispatch();
    const updateProfileClickHandler = () => {
        const newName = document.getElementById("profileName").value;
        const nameArray = newName.split(" ");
        if (nameArray.length >= 1) {
            const firstName = nameArray[0];
            console.log(firstName);
            currProfile.firstName = firstName;
        }
        if (nameArray.length >= 2) {
            const lastName = nameArray[1];
            console.log(lastName);
            currProfile.lastName = lastName;
        }
        const newBio = document.getElementById("profileBio").value;
        currProfile.bio = newBio;

        const newLocation = document.getElementById("profileLocation").value;
        currProfile.location = newLocation;

        const newWebsite = document.getElementById("profileWebsite").value;
        currProfile.website = newWebsite;

        const newDateOfBirth = document.getElementById("profileBirthOfDate").value;
        const nDB = DashToSlashConvert(newDateOfBirth);
        console.log("nDB: " + nDB)
        currProfile.dateOfBirth = nDB;

        updateProfileDispatch(updateProfile(currProfile));
    }

    return (
        <div className="border p-2">
            <div className="row align-items-center pb-2">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg float-end" style={{color: "grey"}}></i>
                    </Link>
                </div>
                <div className="col-9">
                    <div className="fw-bolder">Edit profile</div>
                </div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile">
                        <button onClick={updateProfileClickHandler} className="btn btn-dark rounded-pill">Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-polyglot" src={`/images/${profile.bannerPicture}`} alt=""/>
                <img className="wd-avatar rounded-circle" src={`/images/${profile.profilePicture}`} alt=""/>
                {/*<i className="bi bi-x-lg rounded wd-pictures wd-banner-camera-pos"></i>*/}
                {/*<i className="bi bi-camera rounded wd-pictures wd-banner-x-pos"></i>*/}
                {/*<i className="bi bi-camera rounded wd-pictures wd-avatar-camera-pos"></i>*/}

            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Name</label>
                <input id="profileName"  className="form-control border-0"
                       defaultValue={`${profile.firstName} ${profile.lastName}`}/>
            </div>

            <div className="border pt-2 mt-4 rounded-1">
                <label className="text-secondary ps-2">Bio </label>
                <textarea id="profileBio"  className="form-control border-0" defaultValue={`${profile.bio}`}/>
            </div>
            <div className="border pt-2 mt-4 rounded-1">
                <label className="text-secondary ps-2">Location</label>
                <input id="profileLocation"  className="form-control border-0" defaultValue={`${profile.location}`}/>
            </div>

            <div className="mt-4">
                <input id="profileWebsite" className="form-control" placeholder="Website"/>
            </div>

            <div className="mt-4">
                <div className="d-flex align-items-center">
                    <div className="text-secondary">Birth date</div>
                    <div className="ps-1 pe-1">·</div>
                    <button className="wd-stats-button" style={{color: "blue"}}>Edit</button>
                </div>
            </div>
            <input id="profileBirthOfDate" type="date" defaultValue={slashToDashConvert(profile.dateOfBirth)}/>
            {/*<div>{BirthToDateConvert(profile.dateOfBirth)}</div>*/}

            {/*<div>*/}
            {/*    /!*{DateToBirthConvert(document.getElementById("profileBirthOfDate").value)}*!/*/}
            {/*    {DashToSlashConvert(document.getElementById("profileBirthOfDate").value)}*/}
            {/*</div>*/}
            <div className="row pt-3">
                <div className="col-11">Switch to professional</div>
                <div className="col-1 float-end">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    );

};

export const slashToDashConvert = (slashDate) => {
    var [month, day, year] = slashDate.split("/");
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    const dashDate = year + "-" + month + "-" + day;
    return dashDate;
}

export const DashToSlashConvert = (DashDate) => {
    console.log("DashToSlashConvert")
    console.log("DashDate: " + DashDate)
    var [year, month, day] = DashDate.split("-");
    if (month < 10) {
        month = month.substring(1);
    }
    if (day < 10) {
        day = day.substring(1);
    }
    const slashDate = month + "/" + day + "/" + year;
    console.log("slashDate: " + slashDate)
    return slashDate;
}
export default EditProfileComponent;
