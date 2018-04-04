import React, {Component} from 'react';
import ReactDOM from "react-dom";
import Swiper from "./Swiper";
import './main.css';
import medias from './medias';
import RelatedCharter from "./RelatedCharter";

const HEADER = "Related Searches";

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            medias: []
        };
    }

    render() {
        return (
            <Swiper component={RelatedCharter} items={medias} header={HEADER}/>
        )
    }
}

ReactDOM.render(<Gallery/>, document.getElementById('root'));