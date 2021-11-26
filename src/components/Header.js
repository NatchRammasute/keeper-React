import React from 'react'

function Header({setDarkMode}) {
    return (
        <div className="header">
            <h1>Notes Keeping App</h1>
            <button onClick={ ()=> setDarkMode( (prev)=> !prev)} className="save">Toggle Mode</button>
        </div>
    )
}

export default Header
