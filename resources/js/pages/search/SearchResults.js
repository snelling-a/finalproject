import React, { useContext, useState, useEffect } from "react";
import {
    Form,
    Button,
    FormControl,
    Container,
    Row,
    Card,
} from "react-bootstrap";

// import { SearchContext } from "../../components/TopNav";

function SearchResults(props) {
    console.log(props);
    // const search = useContext(SearchContext);
    // const [items, setItems] = useState(null);
    // const [query, setQuery] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // async function searchEntities(event) {
    //     event.preventDefault();

    //     const url = `/api/entity/search/${query}`;
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setItems(data);
    //     setIsLoading(false);

    //     // console.log(items);
    // }

    // const handleChange = (event) => {
    //     let value = event.target.value;
    //     console.log(value);
    //     setQuery(value);
    // };

    return (
        <>Search page</>
        // <Container fluid>
        // //     <Form inline onSubmit={searchEntities}>
        // //         <FormControl
        // //             type="text"
        // //             placeholder="Search"
        // //             className="mr-sm-2"
        // //             name="search"
        // //             onChange={handleChange}
        // //         />
        // //         <Button type="submit" variant="outline-success">
        // //             Search
        // //         </Button>
        // //     </Form>
        // //     <Row xs={2} md={4} lg={6}>
        // //         {items &&
        // //             items.map((item, i) => (
        // //                 <Card
        // //                     style={{ width: "18rem", height: "20rem" }}
        // //                     key={i}
        // //                 >
        // //                     <Card.Img variant="top" src={item.photo} />
        // //                     <Card.Body>
        // //                         <Card.Title>{item.name}</Card.Title>
        // //                         <Card.Text>{item.description}</Card.Text>
        // //                         <Button variant="primary">Details</Button>
        // //                     </Card.Body>
        // //                 </Card>
        // //             ))}
        // //     </Row>
        //     {/* {items && items.map((item, key) => <p key={key}>{item.name}</p>)} */}
        // </Container>
    );
}

export default SearchResults;
