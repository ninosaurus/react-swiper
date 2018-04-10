import React, {PureComponent, createElement} from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import ItemWrapper from "./ItemWrapper";

function SampleNextArrow(props) {
    const {onClick} = props;
    return (
        <div className="arrow next" onClick={onClick}>
            <span className="glyphicon glyphicon-chevron-right"/>
        </div>
    );
}

function SamplePrevArrow(props) {
    const {onClick} = props;
    return (
        <div className="arrow prev" onClick={onClick}>
            <span className="glyphicon glyphicon-chevron-left"/>
        </div>
    );
}

export default class Swiper extends PureComponent {
    renderItems() {
        return this.props.items.map((item, index) => {
            return <ItemWrapper key={`item-${index}`}
                                component={createElement(this.props.component, {...item})}
                                link={item.link}
                                scroll={this.props.scroll || this.props.items.length <= 3}
                                itemsCount={this.props.items.length}
            />
        })
    }

    renderHeader() {
        if (this.props.header) {
            return <div className="header"><h3 dangerouslySetInnerHTML={{__html: this.props.header}}/></div>
        }
        return null;
    }

    render() {
        let settings = {
            speed: 500,
            slidesToShow: (this.props.items.length > 4 ? 4 : this.props.items.length),
            dots: false,
            slidesToScroll: 1,
            initialSlide: 0,
            swipeToSlide: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: (this.props.items.length > 3 ? 3 : this.props.items.length),
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: (this.props.items.length > 2 ? 2 : this.props.items.length),
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        if (this.props.scroll || this.props.items.length <= 3) {
            return (
                <section className="react-swiper">
                    {this.renderHeader()}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {this.renderItems()}
                        </div>
                    </div>
                </section>
            )
        } else {
            return <section className="react-swiper">
                {this.renderHeader()}
                <Slider {...settings}>
                    {this.renderItems()}
                </Slider>
            </section>
        }
    }
}
Swiper.defaultProps = {
    header: null,
    withLink: true,
    scroll: false
};

Swiper.propTypes = {
    scroll: PropTypes.bool,
    header: PropTypes.string,
    withLink: PropTypes.bool,
    component: PropTypes.element.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};