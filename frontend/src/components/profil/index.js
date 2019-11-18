import React, { Component } from 'react'
import './style.css';

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInvert: false
        };
    }

    handleInvertColor() {
        this.setState({ isInvert: !this.state.isInvert })
    }

    render() {

        return (
            <div className={this.state.isInvert ? "profil_i" : "profil"}>
                <img className={this.state.isInvert ? "profil_img_i" : "profil_img"}
                    src={process.env.PUBLIC_URL + this.props.user.img}
                    alt={this.props.user.name} />

                <div className="profil_info">
                    <div className={this.state.isInvert ? "profil_info_txt_i" : "profil_info_txt"}>
                        {this.props.user.firstname}
                    </div>
                    <div className={this.state.isInvert ? "profil_info_txt_i" : "profil_info_txt"}>
                        {this.props.user.lastname}
                    </div>
                    <div className={this.state.isInvert ? "profil_info_txt_i" : "profil_info_txt"}>
                        {this.props.user.birthdate}
                    </div>
                    <div className={this.state.isInvert ? "profil_info_btn_i" : "profil_info_btn"}
                        onClick={() => this.handleInvertColor()}>
                        Change Colors
                    </div>
                </div>
            </div>
        );
    }
}
