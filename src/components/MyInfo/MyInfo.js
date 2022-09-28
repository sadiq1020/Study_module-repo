import React from 'react';
import myImage from '../../images/profile-pic.png';
import './MyInfo.css'

const MyInfo = () => {
    return (
        <div>
            <div className='name-image'>
                <img src={myImage} alt="" />
                <h3 className='name-text'>Md. Sadiq</h3>
            </div>
            <h5>Latest Degree: BBA</h5>
            <p>Age: 30</p>
            <p>Favorite subject: <strong>Math</strong></p>
        </div>
    );
};

export default MyInfo;