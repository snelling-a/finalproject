import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";

function SearchBar(props) {
    const [query, setQuery] = useState("");
    // const [isLoading, setIsLoading] = useState(true);

    async function searchEntities(event) {
        event.preventDefault();
        if (event.target.name === "reset") {
            props.fetchEntities();
            setQuery("");
        } else {
            const url = `/api/entity/search/${query}`;
            const response = await fetch(url);
            const data = await response.json();
            props.setEntities(data);
        }
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
                        value={query}
                    />
                    <Button type="submit" variant="outline-success" size="sm">
                        Search
                    </Button>
                </Form>
                <Button
                    name="reset"
                    type="submit"
                    variant="outline-danger"
                    // className="mx-1"
                    size="sm"
                    onClick={(event) => {
                        setQuery("");
                        searchEntities(event);
                    }}
                >
                    Reset
                </Button>
            </Container>
        </>
    );
}

export default SearchBar;
