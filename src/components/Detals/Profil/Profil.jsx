import React from 'react'
import "./Profil.css"
function Profil({ user }) {
    return (
        <div>
            <div className="wrp_profil">
                <img src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="" />
                <h1>{user?.name || "Анвар Джураев"}</h1>
                <div className="wrp_Items">
                    <div className="box">
                        <span>Дней</span>
                        <h3>2</h3>
                    </div>
                    <div className="box">
                        <span>Уроков</span>
                        <h3>2</h3>
                    </div>
                    <div className="box">
                        <span>Слов</span>
                        <h3>10</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profil