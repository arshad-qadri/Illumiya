import React from 'react'
import '../../style/howItWorks.css'

const HowItWorks = ({step,num,head,text}) => {
    return (
        <>
            <div className="howItWorks_main my-5">
                <div className="num"><h1> {num} </h1></div>
                <div className="text">
                    <h2> 
                     {head}
                    </h2>
                    <p>{text}</p>
                </div>
            </div>
        </>
    )
}

export default HowItWorks
