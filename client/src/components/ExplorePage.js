import React from 'react';
import Logout from './LogOut';
import ImageUpload from './ImageUpload/ImageUpload';

const ExplorePage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
            <div className='flex flex-col items-center w-9/12 h-screen bg-gray-200 bg-opacity-95 relative overflow-auto'>
                <p>This will be the page with all of the main features... Image Uploader AND Content.
                    IT SHOULD DISPLAY ONLY AFTER user Auth w/ Google OR Clicks 'Continue without'
                </p>
                <div className='ImageUploader'>
                    <ImageUpload />
                </div>
                <div id='content-div'className='my-3'>
                    <div>
                        <p className='text-center text-2xl my-10'>Explore</p>
                    </div>
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black '>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            <div className='box-border h-32 w-32 border-solid border 2 border-black'>Images displayed here?</div>
                            

                        </div>
                </div>
                
            </div>
            <div className= 'm-1 absolute bottom-0 left-0'>
                    <Logout />
            </div>
        </div>
    )
}

export default ExplorePage;