import React, { Component } from 'react'
import './style.css';

export default class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false
        };
    }

    handleImgClick() {
        this.setState({ like: !this.state.like });
        this.state.like ? this.props.publication.like -= 1 : this.props.publication.like += 1;
    }

    render() {
        const favImgPath = this.state.like ? './img/favorite.svg' : './img/favorite_border.svg'
        return (
            <div className="publication">
                <div className="publication_txt">
                    {this.props.publication.txt}
                </div>
                <div className="likeBtn">
                    <img className="publication_fav"
                        src={process.env.PUBLIC_URL + favImgPath}
                        alt="Default"
                        onClick={() => this.handleImgClick()}></img>
                    {this.props.publication.like}
                </div>

            </div>
        );
    }
}
