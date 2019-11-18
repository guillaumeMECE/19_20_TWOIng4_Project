import React, { Component } from 'react'
import './style.css';
import data from '../../assets/data.json'
import Thumbnail from '../thumbnail'
import Profil from '../profil'
import Publication from '../publication'

export default class NavUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: data.users[0]
        };
    }

    changeFocus(user) {
        this.setState({ focus: user })
    }

    renderUsers(user, e) {
        return <Thumbnail key={Math.random().toString(36).substr(2, 9)} user={user} onClick={() => this.changeFocus(user)} />;
    }

    renderPublications(publication, e) {
        return <Publication key={Math.random().toString(36).substr(2, 9)} publication={publication} />;
    }

    render() {
        let usersList = data.users.map((user, e) => this.renderUsers(user, e))
        let publicationsList = this.state.focus.feed.map((publication, e) => this.renderPublications(publication, e))

        return (
            <div className="navUser">
                <div className="navbarUser">
                    <div className="brand">Guillaume Maurin</div>
                    {usersList}
                </div>
                <Profil user={this.state.focus} />
                {publicationsList}
            </div>
        );
    }
}
