import React from "react";
import { Carousel } from "react-bootstrap";

const Car = () => {
    return (
        <Carousel className="shadow rounded w-100 h-100 my-1 ">
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/10/1200/500"
                    alt="Relaxing walks"
                />

                <Carousel.Caption>
                    <h3>Find your next adventure!</h3>
                    <p className="d-none  d-md-block">
                        Go for a relaxing walk in nature.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/569/1200/500"
                    alt="Relaxing walks"
                />

                <Carousel.Caption>
                    <h3>Relaxing walks</h3>
                    <p className="d-none  d-md-block">
                        Go for a relaxing walk in nature.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 rounded"
                    src="https://picsum.photos/id/416/1200/500"
                    alt="Explore Czech Republic"
                />

                <Carousel.Caption>
                    <h3>Explore</h3>
                    <p className="d-none  d-md-block">
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
                    <h3>On your bike!</h3>
                    <p className="d-none  d-md-block">
                        A bicycle ride around the world begins with a single
                        pedal stroke.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Car;
