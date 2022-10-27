import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({
                      tuit =
                          {
                              "_id": 345,
                              "topic": "Space",
                              "userName": "SpaceX",
                              "time": "2h",
                              "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                              "image": "spacex.png",
                              "liked": true,
                              "replies": 345,
                              "retuits": 321,
                              "likes": 1234,
                              "handle": "@spacex",
                              "tuit":
                                  "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection, Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skill to Tesla armor glass."
                          }
                  }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <div className="border p-2 flex-container-flex">
            <div className="d-flex pb-2">
                <img className="rounded-circle wd-profile-avatar" alt=""
                     src={`/images/${tuit.image}`}/>
                <div className="flex-container-flex ps-2 wd-tuit-width">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{tuit.userName}</div>
                            <i className="bi bi-check-circle-fill table-primary pe-1"
                               style={{color: "#0096FF"}}></i>
                            <div className="text-secondary"> {tuit.handle} · {tuit.time}</div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>

                    <div className="mb-2 text-secondary">
                        {tuit.tuit}
                    </div>
                    <TuitStats key={tuit._id} tuit={tuit}/>

                </div>
            </div>
        </div>

    )
        ;
}
export default TuitItem;