import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function SearchBar(props) {
    const [query, setQuery] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    async function searchEntities(event) {
        event.preventDefault();
        console.log(event.target);
        query === "" ? props.fetchEntities() : null;
        const url = `/api/entity/search/${query}`;
        const response = await fetch(url);
        const data = await response.json();
        props.setEntities(data);
    }

    const handleChange = (event) => {
        let value = event.target.value;
        setQuery(value);
    };

    return (
        <>
            <Container fluid className="d-flex justify-content-center">
                <Form inline onSubmit={searchEntities}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-sm-2 "
                        name="search"
                        onChange={handleChange}
                    />
                    <Button type="submit" variant="outline-success">
                        Search
                    </Button>
                </Form>
                <Button
                    type="submit"
                    variant="outline-success"
                    onClick={() => {
                        setQuery("");
                    }}
                >
                    Reset
                </Button>
            </Container>
        </>
    );
}

export default SearchBar;
