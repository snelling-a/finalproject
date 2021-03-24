import React from "react";
import { Carousel } from "react-bootstrap";

const Car = () => {
    return (
        <Carousel className="shadow rounded w-100 my-3 ">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/10/1200/500"
                    alt="Relaxing walks"
                />

                <Carousel.Caption>
                    <h2>Find your next adventure!</h2>
                    <p>Go for a relaxing walk in nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/569/1200/500"
                    alt="Relaxing walks"
                />

                <Carousel.Caption>
                    <h2>Relaxing walks</h2>
                    <p>Go for a relaxing walk in nature.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/416/1200/500"
                    alt="Explore Czech Republic"
                />

                <Carousel.Caption>
                    <h2>Explore</h2>
                    <p>
                        Visit interesting locations all around Czech Republic.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/203/1200/500"
                    alt="On a bike"
                />
                <Carousel.Caption>
                    <h2 className="text-body">On your bike!</h2>
                    <p>
                        A bicycle ride around the world begins with a single
                        pedal stroke.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Car;
