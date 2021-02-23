import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { API_URL } from "../config";
import { Spinner, Button } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import RecCard from './RecCard';
import "../stylesheets/GenreSearch.css"

export default function GenreSearch() {

    const [genreList, setGenreList] = useState([]);
    const [recsSearched, setRecsSearched] = useState(false);
    const [spinnerButton, setSpinnerButton] = useState(false);
    const [recs, setRecs] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/genres`)
            .then(response => {
                setGenreList(response.data);
            })
            .catch(() => {
                console.log("failed to fetch genres")
            })
    }, [])

    // animate react-select
    const animatedComponents = makeAnimated();

    // make call for recs
    const searchRecommendations = e => {
        e.preventDefault();
        let { genres } = e.target;
        setSpinnerButton(true);
        let seedGenres = [];

        if (!genres.length) seedGenres.push(genres.value);
        else {
            for (let i = 0; i < genres.length; i++) {
                if (i > 4) break;
                seedGenres.push(genres[i].value);
            }
        }
        console.log(seedGenres);

        axios.post(`${API_URL}/genrerecommendations`, { seedGenres })
            .then(response => {
                //console.log(response.data);
                setRecs(response.data)
                setSpinnerButton(false);
            })
            .catch(() => {
                console.log("failed to get genre recommendations");
                setSpinnerButton(false)
            })
    }

    return (
        <div className="genresearch-main">
            {genreList.length != 0 ? (
                    <form onSubmit={searchRecommendations} className="genresearch-select">
                        <Select
                            placeholder="Select genres..."
                            isMulti
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            name="genres"
                            options={genreList.map(x => {
                                return { value: x, label: x }
                            })}
                            className="basic-multi-select"
                            classNamePrefix="select"
                        />
                        <br />

                        <Button variant="outline-success" type="submit">
                            {spinnerButton ? (<Spinner animation="border" variant="success" />) : (
                                recsSearched ? (<span>Reload Recommendations</span>) : (<span>Get Recommendations</span>)
                            )}
                        </Button>
                    </form>
            ) : (<Spinner animation="grow" variant="success" />)}
            <div className="rec-list">
            {
                recs ? (
                    recs.map(x => { return <RecCard key={x.id} data={x} /> })
                ) : null
            }
            </div>
        </div>
    )
}
