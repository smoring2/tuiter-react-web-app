import React from "react";

const ProfileItem = (
    {
        key = 123,
        profile = {
            'firstName': 'Jose',
            'lastName': 'Annunziato',
            'handle': '@jannunzi',
            'profilePicture': 'react.png',
            'bannerPicture': 'polyglot.jpeg',
            'bio': 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
            'website': 'youtube.com/webdevtv',
            'location': 'Boston, MA',
            'dateOfBirth': '7/7/1968',
            'dateJoined': '4/2009',
            'followingCount': 340,
            'followersCount': 223
        }
    }
) => {
    return (
        <div className="border p-2">
            <div className="row">
                <div className="col-2">
                    <div className="bi bi-arrow-left"></div>
                </div>
                <div className="col-10">
                    <div className="fw-bolder">{profile.firstName} {profile.lastName}</div>
                    <div className="text-secondary small">6,114 Tweets</div>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-polyglot" src={`/images/${profile.bannerPicture}`}  alt=""/>
                <img className="wd-avatar rounded-circle" src={`/images/${profile.profilePicture}`} alt=""/>
                <button className="btn btn-light wd-edit-btn">Edit Profile</button>
            </div>
        </div>
    );
};
export default ProfileItem;