import React, { Component } from 'react'
import './style.css';

export default class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '../../assets/img/default.png',
        };
    }

    render() {

        return (
            <div className="thumbnail" onClick={this.props.onClick}>
                <div className="thumbnail_imgBox">
                    <img className="thumbnail_img" src={process.env.PUBLIC_URL + this.props.user.img} alt="Default" />
                </div>
                <div className="thumbnail_txt">
                    {this.props.user.firstname}
                </div>

            </div>
        );
    }
};
