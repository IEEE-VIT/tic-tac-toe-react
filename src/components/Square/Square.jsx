/* eslint-disable  */
import React from "react";
import "./Square.css";

const Square = ({ value = "" }) => (
    // add function prop
    <button type="button" className="square">
        {value}
    </button>
);

export default Square;
