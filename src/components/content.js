import React, { Component, Fragment} from 'react';
import One from './sections/one';
import Two from './sections/two';
import Three from './sections/three';
import Four from './sections/four';
import Footer from './sections/footer';

export default class Content extends Component {
    render() {
        return(
            <Fragment>
                <One />
                <Two />
                <Three />
                <Four />
                <Footer />
            </Fragment>
        );
    }
}