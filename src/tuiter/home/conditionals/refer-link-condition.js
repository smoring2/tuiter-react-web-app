import React from "react";

const ReferLinkCondition = ({
                            referLink = {
                                "hasReferLink": true,
                                "referLink": "tweet1.jpeg",
                            },
                        }
    ) => {
        if (referLink.hasReferLink) {
            return (
                <div className="d-inline">
                    <i className="bi bi-arrow-right ps-1 pe-1"></i>
                    <a href={`${referLink.referLink}`} className="wd-link">{referLink.referLink}</a>
                </div>
            );
        } else {
            return (``);
        }
    }
;
export default ReferLinkCondition;