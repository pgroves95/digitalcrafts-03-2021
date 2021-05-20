import React from 'react'

export default function UserDetail({newData}) {
    return (
        <div>
            <h1>User Detail</h1>
            <ul>
                <li>{newData.firstName}</li>
                <li>{newData.lastName}</li>
                <li>{newData.email}</li>
                <li>{newData.password}</li>
            </ul>
        </div>
    )
}
