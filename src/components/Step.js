import React from 'react';

const Step = ({ number, title, components }) => {
    return (
        <div className='step'>
            <h2>{"Step " + number + ": " + title}</h2>
            {components}
        </div>
    );
};

export default Step;