import React from "react";
import ReferLinkCondition from "./refer-link-condition";

const OriginalTweetCondition = ({
                                    originalTweet = {
                                        "hasOriginalTweet": false,
                                        "avatarIcon": "spacex.png",
                                        "userName": "SpaceX",
                                        "handle": "SpaceX",
                                        "time": "16h",
                                        "content": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage ",
                                        "hasReferLink": true,
                                        "referLink": "starlink.com/updates"
                                    },
                                }
    ) => {
        if (originalTweet.hasOriginalTweet) {
            return (
                <div className="rounded-4 border border-secondary p-2">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle wd-original-avatar me-1" alt=""
                             src={`/images/${originalTweet.avatarIcon}`}/>
                        <div className="fw-bold pe-1">{originalTweet.userName}</div>
                        <i className="bi bi-check-circle-fill table-primary pe-1" style={{color: "#0096FF"}}></i>
                        <div
                            className="text-secondary"> @{originalTweet.handle} · {originalTweet.time}</div>
                    </div>
                    <div className="text-secondary">{originalTweet.content}
                        <ReferLinkCondition referLink={{
                            "hasReferLink":originalTweet.hasReferLink,
                            "referLink": `${originalTweet.referLink}`
                        }}/>
                    </div>
                </div>
            );
        } else {
            return (``);
        }
    }
;
export default OriginalTweetCondition;