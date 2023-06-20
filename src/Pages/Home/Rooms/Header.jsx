import React from 'react';
import Heading from './Heading';

const Header = () => {
    return (
        <>
        <div>
            <Heading title='ami jani na'
            subtitle='ami kmne janmo '
            />
        </div>
        <div className='w-full md:h-[60vh] overflow-hidden rounded-md'>
            <img className='object-cover w-full' src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg" alt="" />
        </div>
        </>
    );
};

export default Header;