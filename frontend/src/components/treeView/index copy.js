import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import TreeView from '@material-ui/lab/TreeView';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import StyledTreeItem from './StyledTreeItem';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import OpacityIcon from '@material-ui/icons/Opacity';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import HotelIcon from '@material-ui/icons/Hotel';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import WeekendIcon from '@material-ui/icons/Weekend';
import BathtubIcon from '@material-ui/icons/Bathtub';

const API_URL = 'http://localhost:3030/api';

export default class GmailTreeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.renderUsers();
    }

    fetchSensors(id) {
        return axios.get(`${API_URL}/users/${id}/sensors`);
    }

    fetchMeasures(id) {
        return axios.get(`${API_URL}/sensors/${id}/measures`);
    }

    renderIcon(txt) {
        switch (txt) {
            case 'humidity':
                return OpacityIcon;
            case 'airPollution':
                return CloudIcon;
            case 'temperature':
                return WbSunnyIcon;
            case 'bedroom':
                return HotelIcon;
            case 'entrance':
                return MeetingRoomIcon;
            case 'livingroom':
                return WeekendIcon;
            case 'bathroom':
                return BathtubIcon;
            default:
                return HomeIcon;
        }
    }

    async renderUsers() {
        try {
            const res = await axios.get(`${API_URL}/users`);

            let users = res.data;
            console.log('users: ', users);


            await Promise.all(users.map(async (user) => {
                const res = await this.fetchSensors(user._id);
                user.sensors = res.data;
                await Promise.all(user.sensors.map(async (sensor) => {
                    const res = await this.fetchMeasures(sensor._id);
                    sensor.measures = res.data;
                }));
            }));

            console.log('users2: ', users);

            this.setState({
                Users: users.map((user, i) => (
                    <StyledTreeItem
                        nodeId={i.toString()}
                        key={i}
                        labelText={user.location}
                        labelIcon={LocationOnIcon} >
                        {user.sensors.map((sensor, i) => (
                            <StyledTreeItem
                                nodeId={Math.random().toString(36).substring(7)}
                                key={Math.random().toString(36).substring(7)}
                                labelText={sensor.location}
                                labelIcon={this.renderIcon(sensor.location)}
                                color="#e3742f"
                                bgColor="#fcefe3" >
                                {sensor.measures.map((measure, i) => (
                                    <StyledTreeItem
                                        nodeId={Math.random().toString(36).substring(7)}
                                        key={Math.random().toString(36).substring(7)}
                                        labelText={measure.type}
                                        labelIcon={this.renderIcon(measure.type)}
                                        color="#e3742f"
                                        bgColor="#fcefe3" />
                                ))}
                            </StyledTreeItem>
                        ))}
                    </StyledTreeItem >
                ))
            });
        } catch (err) {
            console.log('RenderUser error : ', err);
        }
    }

    render() {
        return (
            <TreeView
                className={makeStyles({
                    root: {
                        height: 264,
                        flexGrow: 1,
                        maxWidth: 400,
                    },
                })}
                defaultCollapseIcon={< ArrowDropDownIcon />}
                defaultExpandIcon={< ArrowRightIcon />}
                defaultEndIcon={< div style={{ width: 24 }} />}
            >
                {this.state.Users}
            </TreeView >
        )
    }
}
