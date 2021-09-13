import React from 'react'
import '../../style/TopGames.css'

const TopGames = ({ img, name, head, text, classN, imgS }) => {
    return (
        <>
            <div className={`topGames_main d-flex justify-content-center align-items-center mt-5 ${classN} `}>
                <img className={imgS} src={`assets/images/${img}`} alt="game" />
                <div className="">
                    <h1>{name}</h1>
                    <h3> {head} </h3>
                    <p>{text}</p>
                </div>
                <button className="btn btn-warning" >Play the game</button>
            </div>
        </>
    )
}

export default TopGames
