import { useState, useEffect } from "react";

const Header = () => {

    const [isNightTime, setisNightTime] = useState(new Date().getHours >= 18 || new Date().getHours() < 6)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    
    useEffect(() => {
        document.body.className = isNightTime ? 'night-mode' : 'light-mode'
    },[isNightTime])

    
    const toggleMode = () => {
        setisNightTime((isNightTime) => setisNightTime(!isNightTime))
    }

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn)
    }

        return (
            <div className={isNightTime ? 'header-div-night' : 'header-div-day'}>
                {
                    isLoggedIn ? (
                        <div>
                            <h1>Welcome back</h1>
                            <button onClick={handleLogin}>Log Out</button>
                        </div>
                    ) : (
                        <div>
                            <h1>Please Log In</h1>
                            <button onClick={handleLogin}>Log In</button>
                        </div>
                    )
                }
                <button onClick={toggleMode}>{isNightTime ? '☀️' : '🌙'}</button>

            </div>
        )
}

export default Header;