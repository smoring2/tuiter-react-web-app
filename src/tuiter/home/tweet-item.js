import React from "react";
import RetweetCondition from "./conditionals/retweet-condition";
import ImageCondition from "./conditionals/image-condition";
import OriginalTweetCondition from "./conditionals/original-tweet-condition";
import ThreadCondition from "./conditionals/thread-condition";
import ReferLinkCondition from "./conditionals/refer-link-condition";

const TweetItem = ({
                       tweet =
                           {
                               "retweeted": true,
                               "retweetUser": "Elon Musk",
                               "avatarIcon": "spacex.png",
                               "userName": "SpaceX",
                               "handle": "SpaceX",
                               "time": "23h",
                               "content": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
                               "hasReferLink": true,
                               "referLink": "spacex.com/updates",
                               "hasImage": true,
                               "image": "tweet1.jpeg",
                               "hasOriginalTweet": false,
                               "originalTweet": {},
                               "comments": "595",
                               "forwards": "1,168",
                               "likes": "11.1K",
                               "hasThread": true
                           },
                   }
) => {
    // const retweeted = tweet.retweeted;
    // console.log(retweeted);
    // const hasReferLink = tweet.hasReferLink;
    // const hasImage = tweet.hasImage;
    // const hasOriginalTweet = tweet.hasOriginalTweet;
    return (
        <div className="border p-2 flex-container-flex">
            <RetweetCondition retweet={{"retweeted": tweet.retweeted, "retweetUser": `${tweet.retweetUser}`}}/>
            <div className="d-flex pb-2">
                <img className="rounded-circle wd-avatar"
                     src={`/images/${tweet.avatarIcon}`}/>
                <div className="flex-container-flex ps-2">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{tweet.userName}</div>
                            <i className="bi bi-check-circle-fill table-primary pe-1" style={{color: "#0096FF"}}></i>
                            <div className="text-secondary"> @{tweet.handle} · {tweet.time}</div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-three-dots float-end text-secondary fw-bold"></i>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="text-secondary">{tweet.content}</span>
                        <ReferLinkCondition referLink={{
                            "hasReferLink":tweet.hasReferLink,
                            "referLink": `${tweet.referLink}`
                        }}/>
                    </div>
                    <ImageCondition image={{"hasImage": tweet.hasImage, "image": `${tweet.image}`}}/>
                    <OriginalTweetCondition originalTweet={{
                        "hasOriginalTweet": tweet.hasOriginalTweet,
                        "avatarIcon": `${tweet.originalTweet.avatarIcon}`,
                        "userName": `${tweet.originalTweet.userName}`,
                        "handle": `${tweet.originalTweet.handle}`,
                        "time": `${tweet.originalTweet.time}`,
                        "content": `${tweet.originalTweet.content}`,
                        "hasReferLink": tweet.originalTweet.hasReferLink,
                        "referLink": `${tweet.originalTweet.referLink}`
                    }}/>
                    <div className={`${tweet.hasThread ? 'pb-2' : ``} row pt-2`}>
                        <div className="col-3">
                            <i className="bi bi-chat text-secondary"></i>
                            <span className="text-secondary ps-2">{tweet.comments}</span></div>
                        <div className="col-3 d-flex">
                            <i className="bi bi-repeat text-secondary"></i><span
                            className="text-secondary ps-2">{tweet.forwards}</span></div>
                        <div className="col-3 text-secondary">
                            <i className="bi bi-heart"></i>
                            <span className="ps-2">{tweet.likes}</span>
                        </div>
                        <div className="col-3"><i className="bi bi-upload text-secondary"></i>
                        </div>
                    </div>
                    <ThreadCondition thread={{"hasThread": tweet.hasThread}}/>
                </div>
            </div>
        </div>

    )
        ;
}
export default TweetItem;