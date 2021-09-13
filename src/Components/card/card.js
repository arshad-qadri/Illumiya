import React from 'react'

const Card = ({icon, text}) => {
  
    return (
        <>
            <div className="card bg-white mt-3 mx-auto">
                <img className="img-fluid" src={`assets/images/${icon}`} alt="icon" />
                <p>{text}
                </p>
            </div>
        </>
    )
}

export default Card
