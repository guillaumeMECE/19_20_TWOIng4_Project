import React, { Component } from 'react'
import './style.css';

import TreeView from '../treeView';

export default class CardPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // let usersList = data.users.map((user, e) => this.renderUsers(user, e))
        // let publicationsList = this.state.focus.feed.map((publication, e) => this.renderPublications(publication, e))

        return (
            <div className="CardPreview">
                <TreeView onClick={(obj) => this.props.onClick(obj)} />
            </div>
        );
    }
}
