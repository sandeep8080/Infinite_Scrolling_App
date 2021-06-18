import React from 'react';

const Card = ({ name, trips, airline }) => {
    const initials = name.charAt(0);
    return (
        <section className='CardContainer'>
            <div className='card-header'>
                <div className="Avatar-container">
                    <div className="avatar">{initials}</div>
                </div>
                <div>
                    <h4>
                        {name}
                    </h4>
                    <p>Trips: {trips} </p>
                </div>
            </div>
            <div className='divider'></div>
            <div>Any Additional Details</div>

        </section>
    )
};

export default Card;