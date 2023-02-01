import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCounterValue } from "../store/reducers/selectors/getCounterValue";
import { decrement, increment } from "../store/reducers/counterReducer";

const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const incrementHandler = () => {
        dispatch(increment());
    };
    const decrementHandler = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">{ value }</h1>
            <button data-testid="increment-button" onClick={ incrementHandler }>increment</button>
            <button data-testid="decrement-button" onClick={ decrementHandler }>decrement</button>
        </div>
    );
};

export default Counter;