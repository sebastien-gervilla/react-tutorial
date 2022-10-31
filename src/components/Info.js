import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';

const Info = ({ text }) => {
    return (
        <div className="info">
            <BiInfoCircle />
            <h4>Info : </h4>
            <p>{text}</p>
        </div>
    );
};

export default Info;