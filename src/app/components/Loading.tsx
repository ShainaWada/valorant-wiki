import React from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <div className='h-full flex justify-center items-center'>
            <Triangle
                visible={true}
                height="150"
                width="150"
                color="#df1111"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Loading
