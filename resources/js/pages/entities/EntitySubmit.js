import React, { useState, useContext } from "react";
import { kml } from "@tmcw/togeojson";
import {
    Button,
    Container,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { UserContext } from "../../Hike";
import { Link, Redirect } from "react-router-dom";

function EntitySubmit() {
    // state section
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState("No file selected");
    const [errors, setErrors] = useState(null);
    const [validated, setValidated] = useState(false);
    const [{ name, region, photo, description }, setData] = useState({
        name: "",
        region: "",
        photo: "",
        description: "",
    });

    const user = useContext(UserContext);

    // Handle submit and convert KML to geoJSON
    const handleSubmit = () => {
        event.preventDefault();
        setValidated(true);

        if (!file) {
            setStatus("No file selected");
            return;
        }

        setStatus("Loading File");
        const reader = new FileReader();

        reader.onload = (e) => {
            setStatus("File Loaded");
            const content = e.target.result;

            setStatus("XML parsing");
            const xml = convertToXmlDom(content);

            if (!xml) {
                setStatus("XML parsing failed");
                return;
            }

            setStatus("Converting to GeoJSON");

            const geoJson = kml(xml);

            setStatus("Success");

            const coordsR =
                geoJson.features[geoJson.features.length - 1].geometry
                    .coordinates;

            let coords = coordsR.map((point) => ({
                lng: point[0],
                lat: point[1],
                // elv: feature.geometry.coordinates[2],     //// WIP
            }));

            let request_data = { name, region, photo, description, coords };

            // all form data to POST
            sendToServer(request_data);
        };

        reader.readAsText(file);
    };

    // POST all form data to database
    const sendToServer = async (request_data) => {
        event.preventDefault();

        setErrors({});

        const response = await fetch("/api/entity/store", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify(request_data),
        });

        // Redirect after submit
        console.log("success, redirecting");
        location.href = "/";
    };

    const convertToXmlDom = (text) => {
        const parser = new DOMParser();

        const xml = parser.parseFromString(text, "text/xml");

        if (xml.getElementsByTagName("parsererror").length > 0) {
            return null;
        }
        return xml;
    };

    // handle inputs from form
    const handleChange = (event) => {
        const allowed_names = ["name", "region", "photo", "description"],
            name = event.target.name,
            value = event.target.value;

        if (-1 !== allowed_names.indexOf(name)) {
            setData((prev_values) => {
                return { ...prev_values, [name]: value };
            });
        }
    };

    return (
        <Container className="d-flex flex-column align-items-center flex-nowrap">
            {!user ? (
                <Redirect to="/register" />
            ) : (
                <Form
                    noValidate
                    validated={validated}
                    action=""
                    method=""
                    onSubmit={handleSubmit}
                >
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <InputGroup className="mb-2">
                            <InputGroup.Prepend>
                                <InputGroup.Text>🌄</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                required
                            />

                            <Form.Control.Feedback type="invalid">
                                Please provide a name.
                            </Form.Control.Feedback>
                        </InputGroup>{" "}
                    </Form.Group>
                    <Form.Group controlId="region">
                        <Form.Label>Region</Form.Label>
                        <Form.Control
                            type="text"
                            name="region"
                            value={region}
                            onChange={handleChange}
                            required
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide a region.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="photo">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            type="text"
                            name="photo"
                            value={photo}
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a photo.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            as="textarea"
                            name="description"
                            value={description}
                            onChange={handleChange}
                            required
                        />

                        <Form.Control.Feedback type="invalid">
                            Please provide a description.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="file">
                        <Form.Label>GPS File</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }}
                        />
                        <Form.Text id="fileForm" muted>
                            Accepted filetypes: KML
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            Please provide a GPS file.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="success" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </Container>
    );
}

export default EntitySubmit;
