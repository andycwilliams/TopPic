import React from 'react'

export const Image = ({url, key}) => {
    return (
        <div>
            <img src={url} key={key} alt=''/>
        </div>
    )
}
