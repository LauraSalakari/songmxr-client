import React from 'react'
import albumDefault from "../assets/album-default.png";
import "../stylesheets/RecCard.css";
import { Card } from "react-bootstrap";

export default function RecCard(props) {

    let { artists, image, id, album, preview, href, name } = props.data;


    return (
        <Card style={{ width: '22rem', height: 520 }} className="rec-card-main">
            <Card.Img variant="top" src={image.url} className="rec-card-img" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {artists.map(x => { return <p key={x.id}>{x.name}</p> })}
                    {
                        preview ? (
                            <audio controls>
                                <source src={preview} />
                            </audio>
                        ) : <span style={{color:"#c4c6cf"}}>No preview available</span>
                    }

                </Card.Text>
            </Card.Body>
        </Card>


    )
}


{/* <div>
            <picture>
                <img src={image ? image : albumDefault} />
            </picture>
            <div>
                {name}
                {preview ? (<audio controls>
                    <source src={preview} />
                </audio>): null}  
            </div>
        </div> */}
