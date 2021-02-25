import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from "../config";
import { InputGroup, FormControl, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import "../stylesheets/ArtistSearch.css"
import albumDefault from "../assets/album-default.png";

export default function ArtistSearch() {
    const [selectedArtists, setSelectedArtists] = useState([]);
    const [artistInput, setArtistInput] = useState("");
    const [artistSearchResults, setArtistSearchResults] = useState([]);

    const artistSearchUpdated = e => {
        setArtistInput(e.target.value);
    }

    const sendArtistSearch = () => {
        axios.post(`${API_URL}/findartist`, { artist: artistInput })
            .then(response => {
                setArtistSearchResults(response.data);
            })
            .catch(() => {
                console.log("failed to fetch matching artists")
            })
    }

    return (
        <div className="artist-search-content">
            <InputGroup className="mb-3" className="artish-search-input">
                <FormControl
                    placeholder="Find artist"
                    onChange={artistSearchUpdated}
                />
                <InputGroup.Append>
                    <Button variant="outline-success" onClick={sendArtistSearch}><ImSearch /></Button>
                </InputGroup.Append>
            </InputGroup>

            <Container>
                <Row>
                    <Col>
                        this is for selected artists <br />
                        choose up to 5 <br />
                        <Button variant="outline-success">Get Recommendations</Button>
                    </Col>
                    <Col>
                        {artistSearchResults ? (
                            <Container>
                                {artistSearchResults.map(x => {
                                    return (
                                        <Row key={x.id} className="artist-card">
                                            <Col md={4} >
                                                {
                                                    x.image ? <img src={x.image.url} className="artist-card-image" /> : <img src={albumDefault} className="artist-card-image" />
                                                }
                                            </Col>
                                            <Col md={8} >
                                                <h4>{x.name}</h4>
                                            </Col>
                                        </Row>
                                    )
                                })}
                            </Container>
                        ) : (<Spinner animation="border" variant="success" />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
