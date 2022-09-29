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
            <img src={picture} alt="" />
            <h3>{subjectName}</h3>
            <p>Study Duration: {time}m</p>
            <button onClick={handleAddToStudyDetails} className='btn-select'>Select</button>
        </div>
    );
};

export default SingleSubject;