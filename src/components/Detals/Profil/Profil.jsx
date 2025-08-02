import React from 'react'
import "./Profil.css"
function Profil({ name, day, lessons, word }) {
    return (
        <div>
            <div className="wrp_profil">
                <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="" />
                <h1>{name}</h1>
                <div className="wrp_Items">
                    <div className="box">
                        <span>Дней</span>
                        <h3>{day || 0}</h3>
                    </div>
                    <div className="box">
                        <span>Уроков</span>
                        <h3>{lessons || 0}</h3>
                    </div>
                    <div className="box">
                        <span>Слов</span>
                        <h3>{word || 0}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil