import { useState } from "react";

const Header = () => {
    const [isTrue, setIsTrue] = useState(true)
    
    const toggle = () => {
        setIsTrue((isTrue) => setIsTrue(!isTrue))
    }

    if (isTrue) {
        return (
            <div className="header-div-loggedOff">
                <h1>Please Log In</h1>
                <button onClick={toggle}>Off</button>
            </div>
        )
    } else {
        return (
            <div className="header-div-loggedIn">
                <button>⛅</button>
                <button onClick={toggle}>On</button>
            </div>
        )
    }
}

export default Header;