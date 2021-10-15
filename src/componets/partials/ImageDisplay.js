import React from 'react'

export const ImageDisplay = ({url, key}) => {
    return (
        <div>
            <img src={url} key={key} alt=''/>
        </div>
    )
}
