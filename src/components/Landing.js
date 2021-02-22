import { Button } from 'react-bootstrap'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Landing() {
    return (
        <div>
            Get new music recommendations based on artists, tracks, or genres. <br/>
            <Link to="/search/artists"><Button variant="outline-success">Artists</Button></Link>
            <Link to="/search/tracks"><Button variant="outline-success">Tracks</Button></Link>
            <Link to="/search/genres"><Button variant="outline-success">Genres</Button></Link>
        </div>
    )
}
