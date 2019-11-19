import React, { Component } from 'react'
import './style.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // changeFocus(user) {
    //     this.setState({ focus: user })
    // }

    // renderUsers(user, e) {
    //     return <Thumbnail key={Math.random().toString(36).substr(2, 9)} user={user} onClick={() => this.changeFocus(user)} />;
    // }

    // renderPublications(publication, e) {
    //     return <Publication key={Math.random().toString(36).substr(2, 9)} publication={publication} />;
    // }

    render() {
        // let usersList = data.users.map((user, e) => this.renderUsers(user, e))
        // let publicationsList = this.state.focus.feed.map((publication, e) => this.renderPublications(publication, e))
        const handleDrawerOpen = () => {
            // setOpen(true);
        };
        return (
            <div className="drawer">
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
            </div>
        );
    }
}
