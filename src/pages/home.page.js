import React from 'react';
import axios from 'axios';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import LogoutButton from '../components/logoutButton.component';
import GroupBlock from '../components/groupBlock.component';
import NewAdder from '../components/newAdder.component';
import Group from './group.page';

import './pages.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: []
        };
        this.addNewGroup = this.addNewGroup.bind(this);
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/groups`)
            .then(res => {
                let groupData = res.data;
                let username = localStorage.getItem('user');
                let courseGroups = {};
                for (let i = 0; i < groupData.length; i++) {
                    if (groupData[i].username !== username) {
                        continue;
                    }
                    courseGroups[groupData[i].groupname] = groupData[i].courses;
                }
                this.setState({
                    groups: courseGroups
                });
            })
            .catch(err => console.error('Error: ' + err));
    }

    addNewGroup(groupname) {
        let courseGroups = this.state.groups;
        let username = localStorage.getItem('user');
        courseGroups[groupname] = [];
        this.setState({
            modalShow: false,
            groups: courseGroups
        });
        axios.post(`http://localhost:5000/groups/add`, { username, groupname, courses: [] })
            .then(() => { console.log('Group successfully created!'); })
            .catch(err => console.error('Error: ' + err));
    }

    render() {
        let groupBlocks = [], groups = [], i = 0;
        for (let group in this.state.groups) {
            let groupBlockComponent = <GroupBlock name={group} courses={JSON.stringify(this.state.groups[group])} />;
            groupBlocks.push(
                <Link to={`/${group}`} className='groupBlockLink mt-3 pl-0' key={i}>
                    {groupBlockComponent}
                </Link> 
            );
            groups.push(
                <Route exact path={`/${group}`} key={i}>
                    <Group name={group} courses={JSON.stringify(this.state.groups[group])} />
                </Route>
            );
            i++;
        }

        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        {groups}
                        <Route path='/'>
                            <LogoutButton />
                            <h1>Terms</h1>
                            <div className="groups-wrapper">
                                {groupBlocks}
                                <NewAdder adderType={"term"} adderInputLabel={"Term name"} handleAddNew={this.addNewGroup}/>
                            </div>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Home;