import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { API_URL } from "../config";
import { Spinner } from "react-bootstrap";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

export default function GenreSearch() {

    const [genreList, setGenreList] = useState([]);

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

    return (
        <div style={{display: "flex", justifyContent: "center", margin: 40}}>
            {genreList.length != 0 ? (
                <div style={{width: 500, textAlign: "center", color: "black"}}>
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
                </div>
            ) : (<Spinner animation="grow" variant="success" />)}
        </div>
    )
}
