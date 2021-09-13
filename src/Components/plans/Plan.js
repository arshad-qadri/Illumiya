import React from 'react'
import '../../style/plan.css'

const Plan = ({ icon, name, text, rate, planClass }) => {
    return (
        <>
            <div className={`plan mt-5 mx-auto ${planClass} `}>
                <img className="img" src={`assets/images/${icon}`} alt="" />
                <div className="plan-inner mx-auto text-center">
                    <h1> {name} </h1>
                    <p className="plan-text" >{text}</p>
                    <div className=" plan-text-p d-flex ustify-content-start align-items-center" style={{ columnGap: "5px", textAlign: "left" }} >
                        <img className="img-fluid vector" src="assets/images/Vector5.png" alt="" />
                        <p>All standart games for
                            your year
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center" style={{ columnGap: "5px", textAlign: "left" }} >
                        <img className="img-fluid vector" src="assets/images/Vector5.png" alt="" />
                        <p>
                            Connection with parents
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center" style={{ columnGap: "5px", textAlign: "left" }} >
                        <img className="img-fluid vector" src="assets/images/Vector6.png" alt="" />
                        <p>
                            Possibility to get tasks from your
                            teacher or tutor
                        </p>
                    </div>
                    <div className="d-flex justify-content-start align-items-center" style={{ columnGap: "5px", textAlign: "left" }} >
                        <img className="img-fluid vector" src="assets/images/Vector6.png" alt="" />
                        <p>
                            Study with Tutor Illumiya
                        </p>
                    </div>

                    <button className="btn btn-warning" > Buy for ${rate}</button>

                </div>
            </div>
        </>
    )
}

export default Plan
