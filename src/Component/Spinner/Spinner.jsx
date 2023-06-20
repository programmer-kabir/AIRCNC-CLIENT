import React from 'react';
import { CircleLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='h-[70vh] flex flex-col justify-center items-center'>
            <CircleLoader size={100} color='red' />
        </div>
    );
};

export default Spinner;