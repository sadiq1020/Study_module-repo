import React from 'react';
import './StudyTime.css';

const StudyTime = ({ timeDetail }) => {
    console.log(timeDetail);
    let studyTime = 0;
    if (timeDetail) {
        studyTime = studyTime + timeDetail;
    }
    else {
        studyTime = timeDetail;
    }
    return (
        <div>
            <p>Study time: {studyTime}</p>
        </div>
    );
};

export default StudyTime;