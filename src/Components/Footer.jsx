import React from 'react';
import SamIcon from './SVG/SamIcon';
import Logo from './SVG/Logo';

const Footer = () => {
    return (
        <div >
            <div className='flex px-5 py-5 justify-between bg-[#212121] mt-5'>
            <p>© 2024 Samsad Rashid</p>
            {/* <Logo/> */}
            <div>
            <img src="/src/assets/Insta.png" />
            <img src="/src/assets/Dribble.png" />
            <img src="/src/assets/Behance.png" />
            </div>
            </div>
        </div>
    );
};

export default Footer;