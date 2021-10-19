import React from 'react';
import Logout from './LogOut';
// import ImageUpload from './ImageUpload/ImageUpload';


const ExplorePage = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200'>
            <div className='flex flex-col items-center w-9/12 h-screen bg-gray-300 my-3'>
                <p>This will be the page with all of the main features.
                    Will display after user Auth w/ Google OR Clicks 'Continue without'
                </p>
                <div className='my-3'>
                    <Logout />
                </div>
                
            </div>
        </div>
    )
}

export default ExplorePage;