import React from 'react';
import './StudyTime.css';

const StudyTime = ({ studyDetails }) => {
    // console.log(studyDetails);
    let studyTime = 0;

    for (const singleStudyDetail of studyDetails) {
        studyTime = studyTime + singleStudyDetail.time;
    }

    return (
        <div>
            <p>Study time: {studyTime}</p>
        </div>
    );
};

export default StudyTime;