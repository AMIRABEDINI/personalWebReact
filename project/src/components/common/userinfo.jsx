import React from 'react'

const UserInfo = ({ imgUrl, fullName, biotext }) => {
    return (
        <div className='text-center'>
            <img src={imgUrl} alt="" className='img-thumbnail img-fluid' />
            <span className='card bg-danger shadow user-fullname'>
                {fullName}
            </span>
            <p>{biotext}</p>
        </div>
    );
}

export default UserInfo;
