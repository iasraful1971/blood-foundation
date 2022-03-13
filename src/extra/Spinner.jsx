import React from 'react';
import { PuffLoader } from "react-spinners";
const Spinner = () => {
    return (
        <div className='loader'>
            <PuffLoader size={60} color="red" />
        </div>
    );
};

export default Spinner;