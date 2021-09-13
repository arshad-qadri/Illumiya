import React from 'react'
import '../../../style/footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer mx-auto d-flex justify-content-between align-items-center ">
                <div className="logo">
                    <img width="100px" style={{marginLeft:"-78px"}} src="assets/images/logo.png" alt="logo" />
                </div>
                <ul  >
                    <li>
                        <a href="/#">Home</a>
                    </li>
                    <li>
                        <a href="/#">Plans</a>
                    </li>
                    <li>
                        <a href="/#">For parents</a>
                    </li>
                    <li>
                        <a href="/#">How it works</a>
                    </li>
                    <li>
                        <a href="/#">Blogs</a>
                    </li>
                    <li>
                        <a href="/#">For teachers</a>
                    </li>
                    <li>
                        <a href="/#">Games</a>
                    </li>
                    <li>
                        <a href="/#">Contacts</a>
                    </li>
                </ul>
                <button className="btn btn-warning">Become a tutor</button>
            </div>
      
        </>
    )
}

export default Footer
