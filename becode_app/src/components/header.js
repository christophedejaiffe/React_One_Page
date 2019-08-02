import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <section id="header">
            <div className="inner">
                <span className={`icon solid major fa-${this.props.icon}`}></span>
                <h1>Hi, I'm <strong>{this.props.name}</strong>, another fine<br />
                little freebie from <a href="http://html5up.net">HTML5 UP</a>.</h1>
                <p>Accumsan feugiat mi commodo erat lorem ipsum, sed magna<br />
                lobortis feugiat sapien sed etiam volutpat accumsan.</p>
                <ul className="actions special">
                    <li><a href="#one" className="button scrolly">Discover</a></li>
                </ul>
            </div>
        </section>

        )
    }
}