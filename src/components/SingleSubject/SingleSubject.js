import React from 'react';
import './SingleSubject.css'

const SingleSubject = ({ subject }) => {
    const { id, picture, time, subjectName } = subject;
    return (
        <div className='single-subject'>
            <h3>{subjectName}</h3>
            <img src={picture} alt="" />
            <p>Study Duration: {time}m</p>
            <button className='btn-select'>Select</button>
        </div>
    );
};

export default SingleSubject;