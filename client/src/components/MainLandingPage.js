import React from 'react'
import Login from './Login';

const MainLandingPage = ({handlePageChange, currentPage}) => {
    return (
        <div className='flex flex-col justify-center items-center w-2/4 h-2/6 bg-gray-200 bg-opacity-90'>
            <p className='text-7xl my-6'>Top Pic</p>
            <p className='text-xl'>Find Your Inspiration</p>
            <div className='flex justify-center items-center w-2/4 h-1/6 mt-10'>
                <Login handlePageChange={handlePageChange}  />
            </div>
            
        </div>
    )
}

export default MainLandingPage;