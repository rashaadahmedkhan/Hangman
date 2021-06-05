import React from 'react'

const Notification = ({showNotification}) => {
    return (
        <div className = {`notification-container ${showNotification ? `show` : ''}`}>
            <p>This letter has already been used.</p>
        </div>
    )
}

export default Notification