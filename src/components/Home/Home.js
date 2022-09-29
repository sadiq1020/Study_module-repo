import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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

        localStorage.setItem('Break-time', addBreak)
    }

    // Toast 
    const handleActivityComplete = () => {
        toast.success("Congratulations- You are done with your activity!");
    }

    // get break time from local storage and set to ui
    useEffect(() => {
        let localStoragebreakTime = {};
        const storedBreakTime = localStorage.getItem('Break-time');
        if (storedBreakTime) {
            localStoragebreakTime = JSON.parse(storedBreakTime);
            setBreakTime(localStoragebreakTime);
        }
    }, [])

    useEffect(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div>
            <h2>Select your subject</h2>
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
                                addBreaks.map((addBreak, index) => <button className='btn-time-break' key={index} onClick={() => handleBreakTime(addBreak)}>{addBreak}m</button>)
                            }
                        </div>
                    </div>
                    <div>
                        <h3>Study Details</h3>
                        <StudyTime studyDetails={studyDetails}></StudyTime>
                    </div>

                    <div>
                        <h3>Break Time</h3>
                        <p>{breakTime} minutes</p>
                        <button onClick={handleActivityComplete} className='btn-activity-completed'>Activity Completed
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;
