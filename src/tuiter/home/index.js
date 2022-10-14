import tweets from './tweets.json'
import TweetItem from "./tweet-item";
import React from "react";
import "./index.css";

const HomeComponent = () => {
    return (
        <ul className='list-group'>
            {
                tweets.map(tweet =>
                    <TweetItem tweet={tweet}/>)
            }
        </ul>
    );

};
export default HomeComponent;
