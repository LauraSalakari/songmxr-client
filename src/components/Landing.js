import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div>
            Get new music recommendations based on artists, tracks, or genres. <br/>
            <Link to="/search/artists"><Button variant="outline-success" className="landing-button">Artists</Button></Link>
            <Link to="/search/tracks"><Button variant="outline-success" className="landing-button">Tracks</Button></Link>
            <Link to="/search/genres"><Button variant="outline-success" className="landing-button">Genres</Button></Link>
        </div>
    )
}
