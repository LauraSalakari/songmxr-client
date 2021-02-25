import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'
import "../stylesheets/Landing.css"


export default function Landing() {
    return (
        <div>
            <p>Get new music recommendations based on artists, tracks, or genres.</p>
            <Link to="/search/artists" className="landing-button"><Button variant="outline-success" >Artists</Button></Link>
            <Link to="/search/tracks" className="landing-button"><Button variant="outline-success">Tracks</Button></Link>
            <Link to="/search/genres" className="landing-button"><Button variant="outline-success">Genres</Button></Link>
        </div>
    )
}
