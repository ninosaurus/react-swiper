import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
        if (this.props.scroll) {
            return <div className={classNames({
                'swipe-item-container': true,
                'one-item': this.props.itemsCount === 1,
                'two-items': this.props.itemsCount === 2,
                'three-items': this.props.itemsCount === 3
            })}>
                <div className="item-wrapper">
                    <div className="item">
                        {this.renderComponent()}
                    </div>
                </div>
            </div>
        } else {
            return <div className="item-wrapper">
                <div className="item">
                    {this.renderComponent()}
                </div>
            </div>
        }
    }
}
ItemWrapper.defaultProps = {
    withLink: true,
    link: '#',
    scroll: false,
    itemsCount: 3
};

ItemWrapper.propTypes = {
    withLink: PropTypes.bool,
    link: PropTypes.string,
    component: PropTypes.element,
    scroll: PropTypes.bool,
    itemsCount: PropTypes.number
};