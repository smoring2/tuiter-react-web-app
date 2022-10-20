import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="#tuiter">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-twitter"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Tuiter</div>
                </div>
            </a>

            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Home</div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Explore</div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-tag"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Labs</div>
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'notification' ? 'active' : ''}`} href="#notifications">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Notification</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} href="#messages">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Messages</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} href="#bookmarks">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-bookmark-fill"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Bookmarks</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} href="#lists">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-list"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Lists</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} href="#profile">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-person-fill"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Profile</div>
                </div>
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} href="#more">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-dash-circle-dotted"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">More</div>
                </div>
            </a>
        </div>
    )
        ;
};
export default NavigationSidebar;