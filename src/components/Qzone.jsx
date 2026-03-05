import React from 'react';
import swimmingImage from "../assets/swimming.png"
import classImage from "../assets/class.png"
import playImage from "../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold'>QZone</h2>
            <div className='flex flex-col'>
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playImage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;