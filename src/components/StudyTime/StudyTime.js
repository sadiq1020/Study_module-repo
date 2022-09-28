import React from 'react';
import './StudyTime.css';

const StudyTime = ({ studyDetails }) => {
    // console.log(studyDetails);
    let studyTime = 0;

    for (const studyDetail of studyDetails) {
        console.log(studyDetail.time);
        studyTime = studyTime + studyDetail.time;
    }
    // console.log(timeDetail);
    // let studyTime = 0;
    // if (timeDetail) {
    //     studyTime = studyTime + timeDetail;
    // }
    // else {
    //     studyTime = timeDetail;
    // }
    return (
        <div>
            <p>Study time: {studyTime}</p>
        </div>
    );
};

export default StudyTime;