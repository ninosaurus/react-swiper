import React, {PureComponent, createElement} from 'react';
import PropTypes from 'prop-types';
import ItemWrapper from "./ItemWrapper";

export default class Swiper extends PureComponent {
    renderItems() {
        return this.props.items.map((item, index) => {
            return <ItemWrapper key={`item-${index}`} component={createElement(this.props.component, {...item})}
                                link={item.link}/>
        })
    }

    renderHeader() {
        if (this.props.header) {
            return <h3>{this.props.header}</h3>
        }
        return null;
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <section>
                        {this.renderHeader()}
                        <div className="mobile-swiper">
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    {this.renderItems()}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
Swiper.defaultProps = {
    header: null
};

Swiper.propTypes = {
    header: PropTypes.string,
    component: PropTypes.element.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};