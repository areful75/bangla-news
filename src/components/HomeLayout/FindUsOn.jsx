import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div>
            <h2 className='font-bold mb-5 mb-5'>Find Us On </h2>
            <div>
                <div className="join join-vertical w-full">
                    <button className="btn justify-start bg-base-100 join-item"><FaFacebook></FaFacebook>FaceBook</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaTwitter></FaTwitter>Twitter</button>
                    <button className="btn justify-start bg-base-100 join-item"><FaInstagram></FaInstagram>Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FindUsOn;