import React from 'react'
import Card from '../../Components/card/card'
import HowItWorks from '../../Components/card/HowItWorks'
import TopGames from '../../Components/card/TopGames'
import Plan from '../../Components/plans/Plan'
import '../../style/hero.css'
import '../../style/howItWorks.css'
import '../../style/TopGames.css'
import '../../style/plan.css'
import '../../style/testimonial.css'
import '../../style/faq.css'
import '../../style/footer.css'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Faq from '../../Components/FAQ/Faq'
import Footer from '../../Components/Layout/Footer/Footer'

const Home = () => {
    return (
        <>
            <div className="hero mx-auto flex  justify-content-center align-items-center"  >
                <div className="left text-white" style={{ width: "100%" }} >

                    <h1 className="text" >Game hybrid learning platform</h1>


                    <p>We combine learning with games to simplify life for students and teachers to make studying more simple and productive.</p>

                    <button className="btn" >Play</button>

                </div>
                <div className="right">
                    <img className="img-fluid" src="assets/images/girl.png" alt="girl" />
                </div>
            </div>
            <div className="games mx-auto" style={{ color: "#6A64E6" }}>
                <img src="assets/images/5224471.png" alt="" />
                <div className="text">
                    <h1>Games taht make kids better</h1><br />
                    <p> During playing interesting games the child receives and consolidates knowledge of subjects. Develops child's natural learning abilities in the learning style that suits them best. <br /><br />

                        Curriculum aligned content — all topics in science and maths (so far, English soon) covered for grades 6-10.
                        Personal interactive online lessons with the teacher or tutor. <br /><br />

                        We teach a child to love learning</p>
                </div>
                <button className="btn btn-warning" >One week for free</button>

            </div>


            {/* ====================================================================
            why illumiya
            ========================================================================== */}

            <div className="why text-center  text-white">
                <h1>Why Illumiya <br /> is so useful</h1>
            </div>

            <div className="cards container mx-auto mt-5 ">


                <Card icon="139.png" text="Small gaming victories for great victories in the future" bgCol="#81ecec" />


                <Card icon="143.png" text="Fun way to know more" />



                <Card icon="141.png" text="You know if you answered right or not" />


                <Card icon="132.png" text="Dozent games on every taste" />




                <Card icon="135.png" text="To make mistakes as a part of the learning process" />


                <Card icon="142.png" text="The key to victory — the knowledge of the subject" />

            </div>


            {/* ==============================================================================
            how it works
            ============================================================================== */}

            <div className="howItWorks text-center mt-5 text-white mx-auto">
                <h1 className="text-center text-white" >How it works</h1>
                <div className="steps">
                    <div className="d-flex flex-wrap justify-content-around">
                        <div className="">
                            <HowItWorks num="1" head="sign up" text="Registration requirements: Age, year of degree" />
                        </div>
                        <div className="">  <HowItWorks num="2" head="Enter the game" text="Choose the game to practise for" /></div>
                        <div className="">
                            <HowItWorks num="3" head=" Learn and play" text="While playing learn the subject" />

                        </div>
                        <div className="">
                            <HowItWorks num="4" head=" Pass the test" text="The easiest way to pass the exam" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="ratio ratio-16x9 mx-auto ">
                <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
            </div>

            {/* =============================================================================================
            top games
            ======================================================================================== */}

            <div className="topGames mx-auto">
                <div className="text-center ">
                    <h1 className="text-white mt-4" >Top games</h1>
                    <p className="mx-auto bg-da" style={{ color: "orange", fontSize: "22px" }}> Try it</p>
                </div>

                <div className="container">
                    <div className="d-flex flex-wrap justify-content-around align-items-center">
                        <div className="">
                            <TopGames imgS="imgS" classN={"one"} img={"Rectangle 48.png"} name="maths" head="Maths you will know game title" text="Small description about the game some words" />
                        </div>
                        <div className="">
                            <TopGames classN={"two"} img={"Rectangle 50.png"} name="Science" head="Science you will know game title" text="Small description about the game some words" />
                        </div>
                        <div className="" >
                            <TopGames classN={"three"} img={"Rectangle 51.png"} name="English" head="English you will know game title" text="Small description about the game some words" />
                        </div>
                        <div className="">
                            <TopGames classN={"four"} img={"Rectangle 52.png"} name="History" head="History you will know game title" text="Small description about the game some words" />
                        </div>
                    </div>
                </div>
            </div>

            {/* =======================================================================================
            choose plan
            ======================================================================================= */}

            <div className="choosePlan mt-5 mx-auto">
                <h1 className="h1 text-center text-white" >Choose a plan that <br />
                    will work for you</h1>
                <div className="container mx-auto d-flex" style={{ columnGap: "30px" }} >
                    <div className="row" style={{ rowGap: "50px" }} >
                        <div className="col-lg-4 col-sm-12 col-md-6 ">
                            <Plan planClass="planS_one" icon="135.png" name="Personal education" text="Small description about the plan
                            some words small description about" rate="20" />
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6 ">
                            <Plan planClass="planS_two" icon="142.png" name="Syudy
                                with curator" text="Small description about the plan
                                some words small description about" rate="70" />
                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6 ">
                            <Plan planClass="planS_three" icon="139.png" name="Study with
                                Illumia tutor" text="Small description about the plan
                                some words small description about"  rate="98" />
                        </div>
                    </div>


                </div>
            </div>

            {/* =============================================================================================
            testimonial
            ============================================================================================ */}

            <div className="testimonial">
                <h1 className="text-center text-white" >Testimonials</h1>
                <Testimonial />
            </div>

            {/* ===================================================================================================
            FAQ
            ================================================================================================== */}

            <div className="faq mx-auto">
                <h1 className="text-center text-white mt-5" >FAQ</h1>
                <Faq text="Mel in praesent comprehensam, tantas viderer in eum?" act="-" />
                <div className="text mx-auto"  >
                    <p>Eruditi maluisset suscipiantur te nec. Sed rebum iudico ut, indoctum theophrastus his te. Quo quodsi persecuti adipiscing id, sea commodo vocibus ex. Putent deseruisse te mei, eos ei porro periculis.</p>
                </div>
                <Faq text="At eos everti delicatissimi, eos doctus adversarium ne?" act="+" />
                <Faq text="Mel in praesent tantas viderer eum?" act="+" />
                <Faq text="Mel in praesent comprehensam, tantas viderer in eum?" act="+" />
            </div>

            <div className="Trial">
                <h1 className="text-center text-white " > You can say that it’s not about you! <br />
                    Stop thinking that's because you are not <br /> "smart enough" or it's not "your thing." </h1>

                <div className="Trial-inner mx-auto">
                    <h5>One week free of Illumiya games to make sure you can reach the higher grades!
                        Just try it!</h5>
                    <button className="btn btn-warning">Start for free</button>
                    <img className="img-fluid" src="assets/images/girl.png" alt="girl" />

                </div>
            </div>

            {/* ==============================================================================================
            footer
            ============================================================================================= */}
            <Footer />
            <p className="text-white footer-p "  >1999-2021 Illumiya. All Rights Reserved</p>
            <br /><br />

        </>
    )
}

export default Home
