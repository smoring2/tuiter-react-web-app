import React from "react";

const ImageCondition = ({
                              image = {
                                  "hasImage": true,
                                  "image": "tweet1.jpeg",
                              },
                          }
    ) => {
        if (image.hasImage) {
            return (
                <div>
                    <img src={`/images/${image.image}`} className="rounded-4 pt-2 pb-2" style={{width: "100%"}}/>
                </div>
            );
        } else {
            return (``);
        }
    }
;
export default ImageCondition;