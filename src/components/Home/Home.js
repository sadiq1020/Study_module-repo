import React, { useEffect, useState } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';
import './Home.css'
import StudyTime from '../StudyTime/StudyTime';
import MyInfo from '../MyInfo/MyInfo';

const Home = () => {
    const [subjects, setSubjects] = useState([]);
    const [studyDetails, setStudyDetails] = useState([]);

    const [breakTime, setBreakTime] = useState([]);

    const addBreaks = [10, 20, 30, 40, 50];

    const handleBreakTime = (addBreak) => {
        setBreakTime(addBreak);
    }
    // console.log(breakTime);

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className='home-container'>
            <div className="study-selection-container">
                {
                    subjects.map(subject => <SingleSubject subject={subject} key={subject.key} studyDetails={studyDetails} setStudyDetails={setStudyDetails}></SingleSubject>)
                }
            </div>
            <div className="study-activities-container">
                <div className='personal-info'>
                    <MyInfo></MyInfo>
                </div>

                <hr />

                <div>
                    <h3>Add a Break</h3>
                    <div className='break-time'>
                        {
                            addBreaks.map(addBreak => <p onClick={() => handleBreakTime(addBreak)}><strong>{addBreak}</strong>m</p>)
                        }
                    </div>
                </div>
                <div className='study-time-details'>
                    <h3>Study Details</h3>
                    <StudyTime studyDetails={studyDetails}></StudyTime>
                </div>

                <div>
                    <h3>Break Time</h3>
                    <p>{breakTime} minutes</p>
                </div>
            </div>
        </div >
    );
};

export default Home;
