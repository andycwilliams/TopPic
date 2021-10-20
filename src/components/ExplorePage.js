import React from 'react';
import Logout from './LogOut';
// import ImageUpload from './ImageUpload/ImageUpload';

const ExplorePage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
            <div className='flex flex-col items-center w-9/12 h-screen bg-gray-200 bg-opacity-95'>
                <p>This will be the page with all of the main features... Image Uploader AND Content.
                    IT SHOULD DISPLAY ONLY AFTER user Auth w/ Google OR Clicks 'Continue without'
                </p>
                <div className='my-3'>
                    <Logout />
                </div>
            </div>
        </div>
    )
}

export default ExplorePage;