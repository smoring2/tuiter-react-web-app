import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a className="list-group-item" href="#tuiter">Tuiter</a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                Home
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                Explore
            </Link>
            <Link to="/" className="list-group-item">
                Labs
            </Link>
            <a className={`list-group-item
                    ${active === 'notification' ? 'active' : ''}`} href="#notifications">
                Notifications</a>
            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} href="#messages">
                Messages</a>
            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} href="#bookmarks">
                Bookmarks</a>
            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} href="#lists">
                Lists</a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} href="#profile">
                Profile</a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} href="#more">
                More</a>
        </div>
    );
};
export default NavigationSidebar;