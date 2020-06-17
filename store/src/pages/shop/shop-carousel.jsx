import React from 'react';
import Product from "./product";
import products from '../../mock-data/products.json';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

export class ShopCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: products.products
        };
        if (!this.props.max) this.props.max = 1000;
    }

    responsive = {
        desktop1: {
            breakpoint: {max: 3000, min: 1441},
            items: 6,
            slidesToSlide: 2 // optional, default to 1.
        },
        desktop2: {
            breakpoint: {max: 1440, min: 1280},
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        desktop3: {
            breakpoint: {max: 1280, min: 1000},
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: {max: 1000, min: 464},
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    render() {
        return (
            <>
                <section className="section-content padding-y mw-100">
                        <span style={{opacity: "0", lineHeight: "0"}}>.</span>
                        <Carousel
                            responsive={this.responsive}
                            infinite={true}
                            autoPlay={this.props.deviceType !== "mobile" ? true : false}
                            autoPlaySpeed={2500}
                            keyBoardControl={true}
                            removeArrowOnDeviceType={'mobile'}
                            containerClass="carousel-container"
                            deviceType={this.props.deviceType}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-40-px"
                        >
                            {
                                this.state.data.map((item, i) => {
                                        if (i < this.props.max) return <div>
                                            <div style={{maxWidth: "278px"}}>
                                            <Product data={item} picture={item.picture}/>
                                            </div>
                                        </div>
                                    }
                                )
                            }
                        </Carousel>
                </section>
            </>
        )
    }
}
