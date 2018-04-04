import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ItemWrapper extends PureComponent {
    renderComponent() {
        if (this.props.withLink) {
            return <a href={this.props.link} style={{textDecoration: "none"}}>
                {this.props.component}
            </a>
        } else {
            return this.props.component
        }
    }

    render() {
        return <div className="swipe-item-container">
            <div className="item-wrapper">
                <div className="item">
                    {this.renderComponent()}
                </div>
            </div>
        </div>
    }
}
ItemWrapper.defaultProps = {
    withLink: true,
    link: '#',
};

ItemWrapper.propTypes = {
    withLink: PropTypes.bool,
    link: PropTypes.string,
    component: PropTypes.element
};