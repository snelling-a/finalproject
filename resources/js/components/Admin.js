import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../Hike";
import Modal from "react-bootstrap/Modal";

function Admin(props) {
    const user = useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function adminDelete() {
        let id = props.type === "entity" ? props.entity.id : props.comment.id;
        const url = `/api/${props.type}/${id}/destroy`;

        const response = await fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": document
                    .querySelector('meta[name="csrf-token"]')
                    .getAttribute("content"),
            },
            body: JSON.stringify({
                id,
            }),
        });
        if (props.type === "entity") {
            location.href = "/";
        } else {
            location.href = `/details/${props.comment.entity_id}`;
        }
    }

    return (
        <>
            {user && user.role === "admin" ? (
                <>
                    <Button variant="danger" onClick={handleShow}>
                        Delete
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Confirm deletion</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Are you sure you want to delete this{" "}
                            {props.type === "entity" ? "entity" : "comment"}?
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>

                            <Button variant="danger" onClick={adminDelete}>
                                Delete{" "}
                                {props.type === "entity" ? "entity" : "comment"}
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            ) : null}
        </>
    );
}

export default Admin;
