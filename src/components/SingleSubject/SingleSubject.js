import React from 'react';
import './SingleSubject.css'

const SingleSubject = ({ subject, studyDetails, setStudyDetails }) => {
    const { key, picture, time, subjectName } = subject;

    const handleAddToStudyDetails = () => {
        const info = { time, key };
        if (studyDetails) {
            const newStudyDetails = [...studyDetails, info];
            // console.log(newStudyDetails);
            setStudyDetails(newStudyDetails);
        }
        else {
            setStudyDetails(info);
        }
    };


    return (
        <div className='single-subject'>
            <h3>{subjectName}</h3>
            <img src={picture} alt="" />
            <p>Study Duration: {time}m</p>
            <button onClick={handleAddToStudyDetails} className='btn-select'>Select</button>
        </div>
    );
};

export default SingleSubject;