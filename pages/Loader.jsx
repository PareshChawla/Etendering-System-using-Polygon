import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <div className='flex items-center h-screen'>
                <div className='mx-auto'>
                    <InfinitySpin
                        width='100%'
                        color="#4fa94d"
                    />
                </div>
            </div>

        </>
    )
}

export default Loader