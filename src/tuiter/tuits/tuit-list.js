import TuitItem from "./tuit-item";
import "./index.css";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import {
    createTuit,
    deleteTuit,
    findTuits
} from "../../actions/tuits-actions";


const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            <button onClick={() =>
                createTuit(dispatch, newTuit)}
                    className="btn btn-primary float-end">
                Tuit
            </button>
            <textarea className="form-control w-75"
                      onChange={(e) =>
                          setNewTuit({
                              ...newTuit,
                              tuit: e.target.value
                          })}></textarea>

            {
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/>
                )
            }
        </ul>

    );

};
export default TuitList;
