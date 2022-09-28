import React, { useState } from 'react';
import SingleSubject from '../SingleSubject/SingleSubject';
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
                <h2>study activities </h2>
            </div>
        </div>
    );
};

export default Home;