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
            <h5>Last Obtained Degree: BBA</h5>
            <p>Major in MIS</p>
            <p>Daily average study time: 3 hours</p>
            <p>Age: 30</p>
            <p>Favorite subject: <strong>Math</strong></p>
        </div>
    );
};

export default MyInfo;