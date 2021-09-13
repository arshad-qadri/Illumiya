import React from 'react'

const Faq = ({text, act}) => {
    return (
        <div>
           <div className="faq-inner mx-auto px-5 mt-3" >
               <p> {text} </p>
               <div className="minBtn"> {act} </div>
           </div>
        </div>
    )
}

export default Faq
