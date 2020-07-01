import React from 'react'

const Navb = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="http://localhost:3000/home"><i class="fas fa-pencil-ruler"></i> V-Scribe</a>
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" href="http://localhost:3000/"><i class="fas fa-home"></i> Home</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navb;