import React, { useState } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';
import myImage from '../../images/profile-pic.png';
import './Home.css'
import StudyTime from '../StudyTime/StudyTime';

const Home = () => {
    const [subjects, setSubjects] = useState([]);
    const [studyDetails, setStudyDetails] = useState([])

    useState(() => {
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
                    <div className='name-image'>
                        <img src={myImage} alt="" />
                        <h3 className='name-text'>Md. Sadiq</h3>
                    </div>
                    <h5>Latest Degree: BBA</h5>
                    <p>Age: 32</p>
                    <p>Favorite subject: <strong>Math</strong></p>
                </div>

                <hr />

                <div>
                    <h3>Add a Break</h3>
                    <div className='break-time'>
                        <p><strong>10</strong>s</p>
                        <p><strong>20</strong>s</p>
                        <p><strong>30</strong>s</p>
                        <p><strong>40</strong>s</p>
                        <p><strong>50</strong>s</p>
                    </div>
                </div>
                <div className='study-time-details'>
                    <h3>Study Time</h3>
                    {
                        studyDetails.map(studyDetail => <StudyTime timeDetail={studyDetail.time} key={studyDetail.key}></StudyTime>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;