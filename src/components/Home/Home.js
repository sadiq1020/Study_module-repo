import React, { useState } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';
import myImage from '../../images/profile-pic.png';
import './Home.css'

const Home = () => {
    const [subjects, setSubjects] = useState([]);

    useState(() => {
        fetch('study.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])

    return (
        <div className='home-container'>
            <div className="study-selection-container">
                {
                    subjects.map(subject => <SingleSubject subject={subject} key={subject.key}></SingleSubject>)
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
                </div>
            </div>
        </div>
    );
};

export default Home;